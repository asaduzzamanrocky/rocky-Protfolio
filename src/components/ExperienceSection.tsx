import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  Palette,
  Code2,
  Rocket,
  BarChart3,
  ShieldCheck,
  Globe2,
  Sparkles
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExperienceSectionProps {
  theme: ThemeMode;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  const isLight = theme === 'light-contrast';
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const experienceIcons = [Briefcase, Palette, Code2, Rocket, BarChart3, ShieldCheck, Globe2, Sparkles];

  return (
    <section id="experience" className="py-20 sm:py-24 relative bg-transparent text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-14"
        >
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase block">
            Career Track Record & Leadership
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Experience <span className="text-[#00b95a]">& Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Over 10 years of driving digital growth, agency leadership, and engineering resilient digital experiences for global clients.
          </p>
        </motion.div>

        {/* Compact responsive experience grid with expandable role details */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-3 sm:gap-4 max-w-7xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
              className="relative self-start rounded-2xl border p-4 sm:p-5 min-h-[220px] flex flex-col items-center text-center transition-all duration-300 group bg-[#1e1e1e] border-white/10 hover:border-[#00b95a]/40 hover:shadow-xl hover:shadow-[#00b95a]/10"
            >
              <div className="flex w-full flex-col items-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 7, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00b95a]/10 border border-[#00b95a]/20 flex items-center justify-center text-[#00b95a] shrink-0"
                >
                  {React.createElement(experienceIcons[index % experienceIcons.length], { className: 'w-5 h-5' })}
                </motion.div>

                <div className="min-w-0 w-full flex-1">
                  <div className="flex flex-col items-center gap-2 lg:gap-3">
                    <div className="min-w-0 w-full">
                      <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#00b95a] transition-colors truncate">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#00b95a] truncate">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#00b95a]" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#00b95a]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-1">
                    {exp.bulletPoints[0]}
                  </p>

                  <button
                    type="button"
                    onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#00b95a] hover:text-white transition-colors"
                    aria-expanded={expandedExperience === exp.id}
                  >
                    <span>{expandedExperience === exp.id ? 'Hide Details' : 'View Details'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedExperience === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 pt-4 mt-3 border-t border-white/10 text-center">
                          {exp.bulletPoints.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start justify-center gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00b95a] shrink-0 mt-2" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap justify-center gap-1.5 pt-4 mt-4 border-t border-white/10">
                          {exp.tags.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
