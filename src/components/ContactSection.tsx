import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, ExternalLink, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { profileData } from '../data/profile.ts';
import { validateContactForm, ContactFormData } from '../utils/validation.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverFeedback, setServerFeedback] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client-Side Validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setStatus('submitting');
    setServerFeedback('');
    setFormErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerFeedback(data.message || 'Your message has been sent successfully.');
        setReferenceId(data.referenceId || '');
        // Reset form data on verified success
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setServerFeedback(data.error || 'Unable to deliver message. Please use the direct mailto link below.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setServerFeedback('Network connection error while contacting server. Please use the direct mailto link below.');
    }
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`;

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-800/60 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">Get in Touch</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
                Have a Project, Opportunity, or Technical Idea?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                I'm open to software engineering opportunities, AI development projects, technical collaborations, and interesting conversations.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="p-4 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-3.5 group"
              >
                <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Primary Email</span>
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {profileData.email}
                  </span>
                </div>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-slate-300 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">GitHub Repositories</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      github.com/RootUser-999
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-sky-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">LinkedIn Network</span>
                    <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      linkedin.com/in/shahzeb-aman
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </a>

              <a
                href={profileData.fiverr}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-xl bg-[#0E1420] border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#121A29] border border-slate-700/60 text-emerald-400 group-hover:scale-105 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Fiverr Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      fiverr.com/shahzabaman
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0E1420] border border-slate-800 relative shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Send an Engineering Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Messages are processed through our server contact endpoint and securely dispatched directly to my inbox.
            </p>

            {/* Success notification */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-sm">{serverFeedback}</p>
                  {referenceId && (
                    <p className="font-mono text-emerald-400">
                      Inquiry Reference ID: <span className="font-bold">{referenceId}</span>
                    </p>
                  )}
                  <p className="text-slate-400">
                    A copy of your transmission has been confirmed by the backend service.
                  </p>
                </div>
              </div>
            )}

            {/* Error notification */}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-sm">{serverFeedback}</p>
                  <p className="text-slate-400">
                    Your message draft is preserved below. You can also{' '}
                    <a href={mailtoUrl} className="text-indigo-400 underline hover:text-indigo-300">
                      click here to send via your local email client
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Bot Honeypot field (hidden offscreen) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_honeypot">Leave this blank</label>
                <input
                  id="company_honeypot"
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Full Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Jane Smith"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#121A29] border rounded-lg text-slate-100 placeholder:text-slate-600 outline-none transition-colors ${
                      formErrors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#121A29] border rounded-lg text-slate-100 placeholder:text-slate-600 outline-none transition-colors ${
                      formErrors.email ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack / AI Opportunity or Technical Collaboration"
                  className={`w-full px-3.5 py-2.5 text-xs bg-[#121A29] border rounded-lg text-slate-100 placeholder:text-slate-600 outline-none transition-colors ${
                    formErrors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                  }`}
                />
                {formErrors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your project, team, questions, or timeline..."
                  className={`w-full px-3.5 py-2.5 text-xs bg-[#121A29] border rounded-lg text-slate-100 placeholder:text-slate-600 outline-none transition-colors resize-y ${
                    formErrors.message ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit & Fallback */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg transition-colors shadow-lg shadow-indigo-950/40"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xs text-slate-400 hover:text-indigo-400 transition-colors font-mono"
                >
                  Or email directly: {profileData.email}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
