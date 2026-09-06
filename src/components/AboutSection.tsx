import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  GraduationCap,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Target,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutSectionProps {
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  const isLight = theme === 'light-contrast';

  const pillars = [
    {
      title: 'Understand the Problem',
      desc: 'Conduct deep discovery, user research, and stakeholder audits to identify conversion blockers and technical debt.',
      icon: Target,
    },
    {
      title: 'Design the Solution',
      desc: 'Craft component-driven design systems in Figma and Adobe XD emphasizing accessibility and high-converting user pathways.',
      icon: Sparkles,
    },
    {
      title: 'Build the Experience',
      desc: 'Engineer resilient WordPress & WooCommerce architecture, custom post types, ACF matrices, and clean PHP/JS integrations.',
      icon: Briefcase,
    },
    {
      title: 'Optimize for Growth',
      desc: 'Speed hardening (Core Web Vitals sub-1s LCP), technical SEO schemas, and conversion rate optimization (CRO).',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden bg-transparent text-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-14"
        >
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase">
            About
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl">
            A designer and developer who understands the{' '}
            <span className="text-[#00b95a]">
              business problem
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            I turn website problems into practical, useful digital solutions—from the first design decision to launch and improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Clean Architectural Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 bg-[#1e1e1e] border-white/10">

              {/* High-Resolution Neon Portrait Photo & Profile Badge */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl mb-6 group">
                <img
                  src="/rocky-portrait.jpg"
                  alt="Asaduzzaman Rocky - Creative Director & Lead Architect"
                  className="w-full h-72 sm:h-84 object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark & Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/30 to-transparent" />

                {/* Floating Status Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono bg-black/80 text-[#00b95a] border border-[#00b95a]/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00b95a] animate-ping" />
                  <span>Lead Architect & CEO</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-0.5">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white drop-shadow-md">
                    Asaduzzaman Rocky
                  </h3>
                  <p className="text-xs font-mono text-[#00b95a] font-semibold drop-shadow-sm">
                    Creative Director & WordPress Architect • 10+ Yrs
                  </p>
                </div>
              </div>

              {/* Core Statistics Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-2xl border bg-white/[0.02] border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Experience</span>
                  <span className="text-white font-bold text-sm">10+ Years</span>
                </div>

                <div className="p-3 rounded-2xl border bg-white/[0.02] border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Track Record</span>
                  <span className="text-[#00b95a] font-bold text-sm">60+ Live Sites</span>
                </div>

                <div className="p-3 rounded-2xl border bg-white/[0.02] border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-slate-300 font-medium">Barishal, BD</span>
                </div>

                <div className="p-3 rounded-2xl border bg-white/[0.02] border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Consulting</span>
                  <span className="text-[#00b95a] font-bold">Open for Q3/Q4</span>
                </div>
              </div>

              {/* Verified Degree */}
              <div className="p-4 rounded-2xl border flex items-start gap-3 bg-white/[0.02] border-white/5">
                <GraduationCap className="w-5 h-5 text-[#00b95a] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {PERSONAL_INFO.education.institution} (Graduated 2018)
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.me/8801714722651?text=Hello%20Rocky,%20let%20us%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-w-0 py-3 px-4 rounded-full bg-white/5 hover:bg-[#00b95a]/20 text-slate-200 hover:text-white border border-white/10 hover:border-[#00b95a]/40 font-mono text-xs flex items-center justify-between gap-2 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00b95a]" />
                  <span className="min-w-0 break-words">WhatsApp: +880 1714-722651</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & 4 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p className="font-display font-semibold text-xl sm:text-2xl text-white leading-snug">
                "I design the solution, build it, and improve what is already there—so your website works better for your business and the people using it."
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                I work across healthcare, corporate, e-commerce, and UI/UX projects, using the right platform and approach for the job—not a one-size-fits-all build.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                From discovery and interface design to development, repairs, and optimization, I bring design and technical thinking together in one clear process.
              </p>
            </div>

            {/* Strategic 4 Pillars */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00b95a] mb-3 block font-bold">
                Methodology & Growth Architecture
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      className="relative z-10 p-4 sm:p-5 rounded-2xl border transition-all bg-[#1e1e1e]/95 border-white/10 hover:border-[#00b95a]/30"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-[#00b95a]/10 text-[#00b95a]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="min-w-0 text-left font-display font-bold text-sm text-white leading-snug">
                          0{idx + 1}. {p.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {p.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
