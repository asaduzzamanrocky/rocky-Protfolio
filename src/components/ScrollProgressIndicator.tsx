import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { ThemeMode } from '../types';

interface ScrollProgressIndicatorProps {
  theme: ThemeMode;
  activeSection: string;
}

interface SectionMeta {
  id: string;
  number: string;
  name: string;
}

const SECTIONS: SectionMeta[] = [
  { id: 'hero', number: '01', name: 'Creative Director' },
  { id: 'about', number: '02', name: 'Profile & Philosophy' },
  { id: 'projects', number: '03', name: '4×2 Platforms (60+)' },
  { id: 'experience', number: '04', name: '10+ Yrs Experience' },
  { id: 'contact', number: '05', name: 'Initiate Contact' },
];

export const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  theme,
  activeSection,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = theme === 'light-contrast';
  const currentSectionIndex = Math.max(
    0,
    SECTIONS.findIndex((s) => s.id === activeSection)
  );
  const currentSection = SECTIONS[currentSectionIndex] || SECTIONS[0];

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px] bg-black/40">
        <div
          className="h-full transition-all duration-150 bg-gradient-to-r from-[#00b95a] via-emerald-400 to-[#00b95a] shadow-[0_0_12px_rgba(0,185,90,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Side Section Navigator */}
      <div
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 transition-all duration-500 pointer-events-auto ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
      >
        <div className="relative p-3.5 rounded-full backdrop-blur-xl border shadow-2xl flex flex-col items-center gap-4 bg-gradient-to-b from-[#242424]/95 via-[#1e1e1e]/95 to-[#171717]/95 border-[#00b95a]/25 text-white shadow-black/80 shadow-[#00b95a]/10">
          <span className="font-mono text-[8px] tracking-[0.2em] text-slate-500 [writing-mode:vertical-rl] rotate-180">
            Navigate
          </span>

          {/* Active section readout */}
          <div className="flex flex-col items-center text-center px-1 pt-1 border-t border-white/10">
            <span className="font-mono text-[10px] text-[#00b95a] font-semibold tracking-wider">
              {currentSection.number} / 05
            </span>
            <span className="text-[10px] font-sans font-bold max-w-[70px] truncate">
              {currentSection.name.split(' ')[0]}
            </span>
          </div>

          {/* Vertical progress track */}
          <div className="relative w-1 h-28 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#00b95a] to-emerald-400 transition-all duration-150 rounded-full shadow-[0_0_8px_rgba(0,185,90,0.6)]"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Section Jump Pips */}
          <div className="flex flex-col items-center gap-2">
            {SECTIONS.map((sec) => {
              const isActive = sec.id === activeSection;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  title={`Jump to ${sec.number}: ${sec.name}`}
                  className="group relative flex items-center justify-center p-1"
                >
                  <motion.span
                    animate={isActive ? { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] } : { scale: 1, opacity: 1 }}
                    transition={isActive ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.2 }}
                    className={`block rounded-full transition-all duration-300 ${isActive
                      ? 'w-3 h-3 bg-[#00b95a] shadow-[0_0_10px_rgba(0,185,90,0.6)] ring-2 ring-[#00b95a]/40'
                      : 'w-1.5 h-1.5 bg-slate-500 group-hover:bg-[#00b95a] group-hover:scale-125'
                      }`}
                  />
                  {/* Tooltip on hover */}
                  <span className="absolute right-7 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#1e1e1e] border border-white/10 text-slate-200 shadow-lg pointer-events-none">
                    {sec.number} • {sec.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Percentage text */}
          <div className="font-mono text-[9px] text-slate-400 pt-1">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>
    </>
  );
};
