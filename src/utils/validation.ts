/**
 * Contact form input validation and sanitization utilities
 */

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Hidden bot trap field
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Strip basic angle brackets to prevent XSS
    .slice(0, 5000); // Enforce upper length boundary
}

export function validateEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim()) && email.length <= 254;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check (must be empty for real human submissions)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = 'Automated submission detected.';
    return { isValid: false, errors };
  }

  // Full Name validation
  const name = (data.fullName || '').trim();
  if (!name) {
    errors.fullName = 'Full Name is required.';
  } else if (name.length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  } else if (name.length > 100) {
    errors.fullName = 'Name cannot exceed 100 characters.';
  }

  // Email validation
  const email = (data.email || '').trim();
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!validateEmail(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  // Subject validation
  const subject = (data.subject || '').trim();
  if (!subject) {
    errors.subject = 'Subject is required.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  } else if (subject.length > 150) {
    errors.subject = 'Subject cannot exceed 150 characters.';
  }

  // Message validation
  const message = (data.message || '').trim();
  if (!message) {
    errors.message = 'Message content is required.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  } else if (message.length > 5000) {
    errors.message = 'Message cannot exceed 5000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
