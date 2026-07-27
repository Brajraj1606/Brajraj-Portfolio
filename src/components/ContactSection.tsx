import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ContactSectionProps {
  portfolio: PortfolioData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ portfolio }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const subject = encodeURIComponent(`Inquiry for ${portfolio.contact.name} regarding Opportunity`);
    const body = encodeURIComponent(
      `Hello ${portfolio.contact.name},\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.open(`mailto:${portfolio.contact.email}?subject=${subject}&body=${body}`, '_blank');
    setSentStatus('Opened email client with pre-filled message!');
    setTimeout(() => setSentStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Resume Downloads */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              {portfolio.contact.avatarUrl && (
                <div className="w-16 h-20 rounded-2xl overflow-hidden border border-cyan-500/50 shadow-lg shadow-cyan-500/20 shrink-0">
                  <img
                    src={portfolio.contact.avatarUrl}
                    alt={portfolio.contact.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 border border-cyan-800/80 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Let's Connect & Collaborate
                </h2>
              </div>
            </div>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Open to full-time cybersecurity roles, digital forensics investigation projects, and technical web development opportunities.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Email Address</span>
                    <a
                      href={`mailto:${portfolio.contact.email}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {portfolio.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolio.contact.email, 'email')}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Phone Number</span>
                    <a
                      href={`tel:${portfolio.contact.phone}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {portfolio.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolio.contact.phone, 'phone')}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Current Location</span>
                  <span className="text-sm font-bold text-white">{portfolio.contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Direct Email Composer</h3>
                <p className="text-xs text-slate-400">Send a message directly to {portfolio.contact.name}</p>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Hi ${portfolio.contact.name}, we are interested in discussing an opportunity in cybersecurity...`}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-600/30 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email Message</span>
              </button>

              {sentStatus && (
                <p className="text-xs text-center text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800/80 py-2 rounded-xl">
                  {sentStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
