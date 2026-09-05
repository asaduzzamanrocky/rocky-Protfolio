import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { AnalyticsService } from '../services/analyticsService';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'WordPress Architecture & Custom Dev',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formspreeState, formspreeHandleSubmit, resetForm] = useForm('mdeodpqe', {
    data: {
      _subject: () => `New Portfolio Lead from ${formData.name} (${formData.service})`,
    },
  });

  const isLight = theme === 'light-contrast';

  const services = [
    'WordPress Architecture & Custom Dev',
    'Elementor Pro & Advanced Layouts',
    'WooCommerce & High-Volume E-Commerce',
    'Healthcare & Clinic Web Platforms',
    'UI/UX Design Systems (Figma)',
    'Speed & Core Web Vitals Optimization',
    'Lead Generation & Growth Strategy',
  ];



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitError('');
    void formspreeHandleSubmit(e);
  };

  useEffect(() => {
    if (formspreeState.succeeded && !submitted) {
      AnalyticsService.trackEvent('contact_submit', `Lead: ${formData.name}`, {
        service: formData.service,
      });

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f97316', '#fb923c', '#ffffff', '#10b981'],
      });

      setSubmitted(true);
    }

    const formErrors = formspreeState.errors?.getFormErrors();
    if (formErrors?.length) {
      AnalyticsService.trackEvent('contact_submit', `Lead failed: ${formData.name}`);
      setSubmitError(formErrors.map((error) => error.message).join(' '));
    }
  }, [formData.name, formData.service, formspreeState.errors, formspreeState.succeeded, submitted]);

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-transparent text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-14"
        >
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase block">
            Initiate Engagement // Direct Inquiries
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Ready to Engineer Your Next{' '}
            <span className="text-[#00b95a]">
              Digital Breakthrough?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Whether you need a full WordPress ecosystem rebuild, speed hardening, or an enterprise e-commerce portal, let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Direct Info & Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >

            {/* Direct Coordinates Card */}
            <div className="p-6 sm:p-8 rounded-3xl border bg-[#1e1e1e] border-white/10">
              <h3 className="font-display font-bold text-lg text-white mb-4">
                Direct Contact Coordinates
              </h3>

              <div className="space-y-3.5 text-sm font-mono">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex min-w-0 items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all border border-white/5 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#00b95a]/10 text-[#00b95a] group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400">Primary Email</div>
                    <div className="break-all text-xs font-semibold">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => AnalyticsService.trackEvent('whatsapp_click', 'Contact Section WhatsApp')}
                  className="flex min-w-0 items-center gap-3 p-3.5 rounded-2xl bg-[#00b95a]/10 hover:bg-[#00b95a]/20 text-[#00b95a] transition-all border border-[#00b95a]/30 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#00b95a]/20 text-[#00b95a] group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#00b95a]/80">WhatsApp / Direct Line</div>
                    <div className="text-xs font-semibold">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 text-slate-300 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#00b95a]/10 text-[#00b95a]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Headquarters Location</div>
                    <div className="text-xs font-semibold">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-6 p-4 rounded-2xl bg-[#00b95a]/10 border border-[#00b95a]/20 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00b95a]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>SLA: Response within 2 Hours</span>
                </div>
                <p className="text-xs text-slate-400">
                  Available across US, UK, and Australian business time zones.
                </p>
              </div>
            </div>

            {/* Dev Design Grow Agency Card */}
            <div className="p-6 rounded-3xl border bg-[#1e1e1e] border-white/10">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="font-display font-bold text-sm text-white">Dev Design Grow Hub</div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00b95a]/20 text-[#00b95a]">
                  Global Agency
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Full-service web development, conversion optimization, and dedicated ongoing maintenance pipelines.
              </p>
              <a
                href={PERSONAL_INFO.links.agency}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00b95a] hover:underline"
              >
                <span>Visit devdesigngrow.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-slate-200 shadow-xl' : 'bg-[#0e1017] border-white/10 shadow-2xl'
              }`}>

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Transmission Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been routed to Asaduzzaman Rocky's inbox (<span className="text-[#00b95a]">{PERSONAL_INFO.email}</span>). Expect a response within 2 hours.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={PERSONAL_INFO.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ping on WhatsApp Directly</span>
                    </a>
                    <button
                      onClick={() => {
                        resetForm();
                        setSubmitted(false);
                        setSubmitError('');
                      }}
                      className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300">
                        Full Name / Company <span className="text-[#00b95a]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-2xl text-xs font-mono border focus:outline-none transition-all bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-[#00b95a]/50 focus:bg-white/[0.08]"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300">
                        Work Email Address <span className="text-[#00b95a]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-2xl text-xs font-mono border focus:outline-none transition-all bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-[#00b95a]/50 focus:bg-white/[0.08]"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Required Service Focus
                    </label>
                    <select
                      value={formData.service}
                      name="service"
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl text-xs font-mono border focus:outline-none transition-all bg-[#1e1e1e] border-white/10 text-white focus:border-[#00b95a]/50"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0e1017] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Project Goals & Timeline <span className="text-[#00b95a]">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your business goals, target deliverables, or current website bottleneck..."
                      className="w-full px-4 py-3 rounded-2xl text-xs font-mono border focus:outline-none transition-all bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-[#00b95a]/50 focus:bg-white/[0.08]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formspreeState.submitting}
                    className="w-full py-4 px-6 rounded-full font-display font-semibold text-sm text-white bg-[#00b95a] hover:bg-[#00984a] shadow-lg shadow-[#00b95a]/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    id="submit-contact-form-btn"
                  >
                    {formspreeState.submitting ? (
                      <span>Dispatching Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>

                  {submitError && (
                    <div role="alert" className="flex items-start gap-2 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{submitError} You can also email {PERSONAL_INFO.email} directly.</span>
                    </div>
                  )}

                  <ValidationError field="email" errors={formspreeState.errors} className="text-xs text-red-200" />
                  <ValidationError field="message" errors={formspreeState.errors} className="text-xs text-red-200" />

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Encrypted SSL & Anti-Spam Protected</span>
                    </span>
                    <span>Direct: asaduzzamanrocky@gmail.com</span>
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
