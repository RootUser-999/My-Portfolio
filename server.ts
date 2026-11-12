import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

// Middleware for parsing JSON bodies
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting in memory: Max 5 submissions per 10 minutes per IP
interface RateLimitRecord {
  count: number;
  firstRequest: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// In-memory store for contact inquiries (also persisted to contact_messages.log)
export interface ContactRecord {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  deliveredVia: string;
}
const contactRecords: ContactRecord[] = [];

// Helper email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return typeof email === 'string' && emailRegex.test(email.trim()) && email.length <= 254;
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Shahzeb Portfolio API',
  });
});

// Dedicated Contact API Endpoint
app.post('/api/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';

    // 1. Rate Limiting Check
    const now = Date.now();
    const clientRecord = rateLimitMap.get(clientIp);

    if (clientRecord) {
      if (now - clientRecord.firstRequest < RATE_LIMIT_WINDOW_MS) {
        if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
          res.status(429).json({
            success: false,
            error: 'Too many messages sent. Please wait a few minutes before submitting another message.',
          });
          return;
        }
        clientRecord.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
    }

    const { fullName, email, subject, message, honeypot } = req.body || {};

    // 2. Honeypot Spam Protection
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently return success to mislead bots, but do not process
      res.json({
        success: true,
        message: 'Message received successfully.',
        id: 'ref-' + Math.random().toString(36).substring(2, 9),
      });
      return;
    }

    // 3. Server-side Validation
    const cleanName = String(fullName || '').trim().replace(/[<>]/g, '');
    const cleanEmail = String(email || '').trim().replace(/[<>]/g, '');
    const cleanSubject = String(subject || '').trim().replace(/[<>]/g, '');
    const cleanMessage = String(message || '').trim().replace(/[<>]/g, '');

    if (!cleanName || cleanName.length < 2) {
      res.status(400).json({ success: false, error: 'Full name must be at least 2 characters.' });
      return;
    }
    if (cleanName.length > 100) {
      res.status(400).json({ success: false, error: 'Full name cannot exceed 100 characters.' });
      return;
    }
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      res.status(400).json({ success: false, error: 'A valid email address is required.' });
      return;
    }
    if (!cleanSubject || cleanSubject.length < 3) {
      res.status(400).json({ success: false, error: 'Subject must be at least 3 characters.' });
      return;
    }
    if (cleanSubject.length > 150) {
      res.status(400).json({ success: false, error: 'Subject cannot exceed 150 characters.' });
      return;
    }
    if (!cleanMessage || cleanMessage.length < 10) {
      res.status(400).json({ success: false, error: 'Message must be at least 10 characters.' });
      return;
    }
    if (cleanMessage.length > 5000) {
      res.status(400).json({ success: false, error: 'Message cannot exceed 5000 characters.' });
      return;
    }

    const targetRecipient = process.env.CONTACT_EMAIL || 'shahzabaman971@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const recordId = 'MSG-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

    let deliveryMethod = 'server-logged';

    // 4. Dispatch Email via Resend if API key is provided
    if (resendApiKey && resendApiKey.startsWith('re_')) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: targetRecipient,
            reply_to: cleanEmail,
            subject: `[Portfolio Inquiry] ${cleanSubject}`,
            html: `
              <h2>New Message from Portfolio Contact Form</h2>
              <p><strong>From:</strong> ${cleanName} (&lt;${cleanEmail}&gt;)</p>
              <p><strong>Subject:</strong> ${cleanSubject}</p>
              <p><strong>Reference ID:</strong> ${recordId}</p>
              <hr />
              <p style="white-space: pre-wrap;">${cleanMessage}</p>
              <hr />
              <p><small>Sent via Shahzeb Portfolio Contact System</small></p>
            `,
          }),
        });

        if (response.ok) {
          deliveryMethod = 'resend-api';
        } else {
          const errData = await response.text();
          console.warn('[Contact] Resend API responded with error, recorded fallback:', errData);
          deliveryMethod = 'server-logged-fallback';
        }
      } catch (emailErr) {
        console.warn('[Contact] Error calling email provider, using fallback logging:', emailErr);
        deliveryMethod = 'server-logged-fallback';
      }
    }

    // 5. Store record locally
    const record: ContactRecord = {
      id: recordId,
      timestamp: new Date().toISOString(),
      fullName: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      ip: clientIp.replace(/:\d+$/, ''),
      deliveredVia: deliveryMethod,
    };
    contactRecords.push(record);

    // Append to log safely
    try {
      const logEntry = `[${record.timestamp}] ID: ${record.id} | From: ${record.fullName} <${record.email}> | Subject: ${record.subject} | Via: ${deliveryMethod}\n`;
      fs.appendFileSync(path.join(__dirname, 'contact_messages.log'), logEntry);
    } catch {
      // Ignore file write issues
    }

    res.json({
      success: true,
      message: `Thank you, ${cleanName}! Your message has been received. Shahzeb will review your inquiry shortly.`,
      referenceId: recordId,
      deliveredVia: deliveryMethod,
      recipient: targetRecipient,
    });
  } catch (error) {
    console.error('[Contact Error]', error);
    res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your message. Please try the mailto link below.',
    });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Shahzeb Portfolio] Server running on http://0.0.0.0:${PORT} (mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
