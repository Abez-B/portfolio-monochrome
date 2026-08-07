import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { QRCodeSVG } from 'qrcode.react';
import { useCMS } from '../../cms/CMSContext';

interface ContactPlatformItem {
  id: string;
  title: string;
  value: string;
  url: string;
  qrCodeUrl?: string;
}

const convertDriveLink = (url: string) => {
  if (!url) return url;
  const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
};

const QRCodeDisplay: React.FC<{ url: string; qrCodeUrl?: string; title: string }> = ({ url, qrCodeUrl, title }) => {
  const [imgError, setImgError] = useState(false);
  const targetUrl = url && url !== '#' ? url : 'https://bharath.is-cool.dev';
  const formattedQrUrl = qrCodeUrl ? convertDriveLink(qrCodeUrl) : undefined;

  return (
    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 inline-block transition-transform hover:scale-105">
      {formattedQrUrl && !imgError ? (
        <img
          src={formattedQrUrl}
          alt={`${title} QR Code`}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      ) : (
        <QRCodeSVG
          value={targetUrl}
          size={84}
          bgColor="#ffffff"
          fgColor="#000000"
          level="M"
        />
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const { cmsData } = useCMS();
  const { contact } = cmsData;
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_qozywht';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_NOTIFY || 'template_5jr93kg';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'WMOKkeQhT9qJCrKNy';

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS parameters are missing.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS send error:', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Compile platforms list excluding any personal site
  const rawCustomContacts = (contact.customContacts || []).filter(
    (c) => c.id !== 'contact-website' && !c.title.toLowerCase().includes('personal site')
  );

  const platforms: ContactPlatformItem[] = [
    {
      id: 'email',
      title: 'Email',
      value: contact.email,
      url: `mailto:${contact.email}`,
      qrCodeUrl: contact.emailQrCode,
    },
    {
      id: 'discord',
      title: 'Discord',
      value: contact.discordHandle,
      url: contact.discordUrl,
      qrCodeUrl: contact.discordQrCode,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      value: contact.whatsappDisplay,
      url: `https://wa.me/${contact.whatsappNumber}`,
      qrCodeUrl: contact.whatsappQrCode,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: contact.linkedinHandle,
      url: contact.linkedinUrl,
      qrCodeUrl: contact.linkedinQrCode,
    },
    ...rawCustomContacts.map((c) => ({
      id: c.id,
      title: c.title,
      value: c.value,
      url: c.url || c.value,
      qrCodeUrl: c.qrCodeUrl,
    })),
  ];

  return (
    <motion.section
      id="contact"
      className="text-black dark:text-white py-6 md:py-8 px-4 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Scan any QR code or click a link to connect across platforms directly.
          </p>
        </div>

        {/* ─── RECTANGULAR PLATFORM ISLAND (Compact Grid with Title: "Scan and connect") ─── */}
        <div className="glass-card p-5 sm:p-8 mb-10 shadow-xl border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-white">
              Scan and connect
            </h3>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400">
              {platforms.length} Platforms
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {platforms.map((platform) => {
              return (
                <div
                  key={platform.id}
                  className="glass-card p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.02] border border-white/10"
                >
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                    {platform.title}
                  </p>
                  
                  {platform.url && platform.url !== '#' ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-black dark:text-white hover:underline truncate max-w-full mb-3"
                      title={platform.value}
                    >
                      {platform.value}
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-black dark:text-white truncate max-w-full mb-3">
                      {platform.value}
                    </span>
                  )}

                  {/* Compact Inline QR Code with Automatic SVG Fallback */}
                  <div className="mt-auto pt-1 flex flex-col items-center">
                    <QRCodeDisplay
                      url={platform.url}
                      qrCodeUrl={platform.qrCodeUrl}
                      title={platform.title}
                    />
                    <span className="text-[9px] text-gray-400 dark:text-gray-500 mt-1.5 font-medium">
                      Scan for {platform.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── EMAIL FORM (Placed Below Rectangular Island) ─── */}
        <div className="max-w-2xl mx-auto glass-card p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-1.5">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Prefer email? Drop your message below and I'll respond as soon as possible.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-green-900/50 border border-green-500 text-green-200 p-5 rounded-xl text-center">
              <p className="text-base font-bold">Message sent successfully!</p>
              <p className="text-xs mt-1 text-green-300">Thank you for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="mt-4 text-xs font-semibold underline hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {/* Hidden EmailJS field aliases for template compatibility */}
              <input type="hidden" name="to_name" value="Bharath" />
              <input type="hidden" name="from_name" value={formData.name} />
              <input type="hidden" name="from_email" value={formData.email} />

              <div>
                <label htmlFor="user_name" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 text-black dark:text-white placeholder-gray-400 text-xs sm:text-sm transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 text-black dark:text-white placeholder-gray-400 text-xs sm:text-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30 text-black dark:text-white placeholder-gray-400 text-xs sm:text-sm transition-all resize-none"
                  placeholder={`Hello ${contact.linkedinHandle.split('-')[0]}, I would like to talk about...`}
                ></textarea>
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center space-y-2">
                  <p className="text-red-400 text-xs font-semibold">Auto-mailer service unavailable or blocked.</p>
                  <p className="text-gray-300 text-xs">Click below to send your pre-filled message via your email app:</p>
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio Contact from ${formData.name || 'Visitor'}`)}&body=${encodeURIComponent(`${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`)}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-red-500/20 hover:bg-red-500/30 text-white rounded-lg font-bold text-xs border border-red-500/40 transition-all cursor-pointer"
                  >
                    ✉️ Send Pre-filled Email to {contact.email}
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-btn font-bold py-3 px-5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-1 text-xs sm:text-sm tracking-wide"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
