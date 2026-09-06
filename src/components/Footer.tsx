import React from 'react';
import {
  ArrowUp,
  Linkedin,
  Globe,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isLight = theme === 'light-contrast';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t bg-[#1e1e1e] border-white/10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Asaduzzaman Rocky logo"
                className="h-9 w-9 rounded-full object-contain ring-1 ring-white/10 shadow-[0_0_12px_rgba(0,185,90,0.08)] bg-transparent"
              />
              <span className="font-display font-extrabold text-lg text-white">
                Asaduzzaman Rocky
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Website Designer & Developer. I build new websites, fix broken ones, redesign outdated experiences, and improve what is already there.
            </p>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white">
              Direct Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#hero" className="hover:text-[#00b95a] transition-colors">01 // Hero Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00b95a] transition-colors">02 // About & Philosophy</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00b95a] transition-colors">03 // 4×2 Platforms (60+)</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#00b95a] transition-colors">04 // Career Timeline</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00b95a] transition-colors">05 // Initiate Contact</a>
              </li>
            </ul>
          </div>

          {/* Professional Networks */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white">
              Professional Networks & Hubs
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={PERSONAL_INFO.links.agency}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#00b95a]" />
                <span>Dev Design Grow</span>
              </a>

              <a
                href={PERSONAL_INFO.links.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00b95a]" />
                <span>Behance Portfolio</span>
              </a>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#00b95a]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Asaduzzaman Rocky. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-[#00b95a] hover:text-white text-slate-400 transition-all border border-white/10 flex items-center gap-1.5"
            title="Return to top"
            id="footer-back-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
