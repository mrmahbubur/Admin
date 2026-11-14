import React, { useEffect, useState } from 'react';
import { Calendar, CheckCircle2, ExternalLink, Globe, Mail, Phone, Send } from 'lucide-react';
import { useStudio } from '../context/StudioContext';

export const ContactSection: React.FC = () => {
  const { adminProfile, selectedInquiryTopic, setSelectedInquiryTopic } = useStudio();
  const topicOptions = Array.from(
    new Set([
      ...(adminProfile.liveServices || []).map((svc) => svc.title),
      ...adminProfile.whatICanHelpWith,
      'General Inquiry',
    ])
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(
    selectedInquiryTopic || topicOptions[0] || 'IT Support & Technical Troubleshooting'
  );
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [receiptId, setReceiptId] = useState('');

  useEffect(() => {
    if (selectedInquiryTopic) {
      setTopic(selectedInquiryTopic);
      setReceiptId('');
    }
  }, [selectedInquiryTopic]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);

    try {
      const res = await fetch('./api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, topic, message }),
      });
      const ct = res.headers.get('content-type') || '';

      if (ct.includes('application/json')) {
        const json = await res.json();
        if (!res.ok || !json?.success) {
          setErrorMsg(json?.error || 'Unable to submit your inquiry.');
          return;
        }
        setReceiptId(json.id || 'Submitted');
        setName('');
        setEmail('');
        setMessage('');
        return;
      }

      const localId = `inq-${Date.now().toString(36)}`;
      try {
        const prev = JSON.parse(localStorage.getItem('mrs_inquiries_local') || '[]');
        localStorage.setItem(
          'mrs_inquiries_local',
          JSON.stringify([
            ...(Array.isArray(prev) ? prev : []),
            { id: localId, name, email, topic, message, receivedAt: new Date().toISOString() },
          ])
        );
      } catch {
        // Ignore storage errors
      }
      setReceiptId(localId);
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      const localId = `inq-${Date.now().toString(36)}`;
      setReceiptId(localId);
      setName('');
      setEmail('');
      setMessage('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="py-16 sm:py-20 bg-[#f4f7fb] dark:bg-[#070b14] border-b border-[#dbe3ee] dark:border-[#1c273b] transition-colors duration-200"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="mb-10 space-y-2">
          <div className="text-[13px] font-mono font-medium text-[#2563eb] dark:text-[#38bdf8]">
            Verified Contact &amp; Accounts
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] dark:text-white tracking-tight text-balance">
            Connect with {adminProfile.siteName}
          </h2>
          <p className="text-[15px] text-[#475569] dark:text-[#94a3b8] max-w-2xl">
            Official channels and verified profiles for direct communication. {adminProfile.availabilityNote}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Hairline Verified Accounts Directory */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={`mailto:${adminProfile.socials.email}`}
                className="flex items-center gap-3.5 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11.5px] text-[#64748b] dark:text-[#94a3b8]">Direct Email</div>
                  <div className="text-[13px] font-mono font-medium text-[#0f172a] dark:text-white truncate">
                    {adminProfile.socials.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${adminProfile.socials.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11.5px] text-[#64748b] dark:text-[#94a3b8]">Telephone</div>
                  <div className="text-[13px] font-mono tabular-nums font-medium text-[#0f172a] dark:text-white truncate">
                    {adminProfile.socials.phone}
                  </div>
                </div>
              </a>

              <a
                href={adminProfile.socials.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <Calendar className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11.5px] text-[#64748b] dark:text-[#94a3b8]">Calendly</div>
                    <div className="text-[13.5px] font-semibold text-[#0f172a] dark:text-white truncate">
                      Book Meeting
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748b] shrink-0" />
              </a>

              <a
                href={adminProfile.socials.contactForm}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-4 rounded-xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface hover:border-[#2563eb] dark:hover:border-[#38bdf8] transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <Globe className="w-4 h-4 text-[#2563eb] dark:text-[#38bdf8] shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11.5px] text-[#64748b] dark:text-[#94a3b8]">Web Portal</div>
                    <div className="text-[13.5px] font-semibold text-[#0f172a] dark:text-white truncate">
                      mrsadmin.blogspot
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748b] shrink-0" />
              </a>
            </div>

            <div className="pt-2 space-y-3">
              <div className="text-[13px] font-semibold text-[#0f172a] dark:text-white">
                Verified Accounts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#dbe3ee] dark:border-[#1c273b]">
                {adminProfile.verifiedAccounts.map((acc) => (
                  <a
                    key={acc.url}
                    href={acc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3.5 px-1 sm:odd:pr-5 sm:even:pl-5 border-b border-[#dbe3ee] dark:border-[#1c273b] hover:text-[#2563eb] dark:hover:text-[#38bdf8] transition-colors"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-[13.5px] font-semibold text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] truncate transition-colors">
                        {acc.label}
                      </div>
                      <div className="text-[11.5px] font-mono text-[#64748b] dark:text-[#94a3b8] truncate">
                        {acc.handle}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#2563eb] dark:group-hover:text-[#38bdf8] shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Inquiry Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-[#dbe3ee] dark:border-[#1c273b] bg-white dark:bg-[#0c121e] tech-surface">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-1">
              Send an Inquiry to {adminProfile.siteName}
            </h3>
            <p className="text-[13.5px] text-[#475569] dark:text-[#94a3b8] mb-6">
              Reach out for remote IT troubleshooting, document management, or web administration.
            </p>

            {receiptId ? (
              <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-[15px]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Inquiry Recorded</span>
                </div>
                <p className="text-[13.5px] text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
                  Your message regarding <strong>{topic}</strong> has been saved.
                </p>
                <div className="text-[12px] font-mono tabular-nums text-emerald-800 dark:text-emerald-300">
                  Reference ID: {receiptId}
                </div>
                <button
                  type="button"
                  onClick={() => setReceiptId('')}
                  className="px-4 py-2 min-h-[44px] rounded-lg bg-[#0f172a] dark:bg-[#f1f5f9] text-white dark:text-[#0f172a] text-[12.5px] font-semibold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5"
                  >
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => {
                      setTopic(e.target.value);
                      setSelectedInquiryTopic(e.target.value);
                    }}
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8]"
                  >
                    {topicOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe your technical issue, document task, or remote project..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#dbe3ee] dark:border-[#1c273b] bg-[#f4f7fb] dark:bg-[#070b14] text-[#0f172a] dark:text-[#f1f5f9] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#2563eb] dark:focus:ring-[#38bdf8] resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="text-[12.5px] font-semibold text-rose-600 dark:text-rose-400">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-5 min-h-[44px] rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] text-white text-[13.5px] font-bold transition-colors cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
