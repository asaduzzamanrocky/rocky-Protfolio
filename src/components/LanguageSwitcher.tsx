import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, Check, ChevronUp } from 'lucide-react';
import { LANGUAGES, Language, LangCode } from '../data/translations';

interface LanguageSwitcherProps {
  currentLang: LangCode;
  onLanguageChange: (lang: LangCode) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLang = LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutside);
    }
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  const handleSelect = (lang: Language) => {
    onLanguageChange(lang.code);
    document.documentElement.setAttribute('dir', lang.dir);
    document.documentElement.setAttribute('lang', lang.code);
    setIsOpen(false);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-6 z-50"
      id="language-switcher"
    >
      {/* Dropdown — opens upward */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lang-dropdown"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[calc(100%+8px)] left-0 w-52 rounded-2xl border border-white/10 bg-[#1a1a1a] backdrop-blur-xl shadow-2xl shadow-black/70 overflow-hidden"
            style={{ transformOrigin: 'bottom left' }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
              <Languages className="w-3.5 h-3.5 text-[#00b95a] flex-shrink-0" />
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Select Language
              </span>
            </div>

            {/* Language options */}
            <ul className="py-1.5 max-h-72 overflow-y-auto">
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === currentLang;
                return (
                  <li key={lang.code}>
                    <button
                      type="button"
                      onClick={() => handleSelect(lang)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100 ${
                        isActive
                          ? 'bg-[#00b95a]/15 text-[#00b95a]'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {/* Flag emoji */}
                      <span className="text-xl leading-none w-7 flex-shrink-0 text-center">
                        {lang.flag}
                      </span>

                      {/* Names */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold leading-tight truncate">
                          {lang.nativeName}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 leading-tight">
                          {lang.name}
                        </div>
                      </div>

                      {/* Active tick */}
                      {isActive && (
                        <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#00b95a]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        type="button"
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-3 py-2.5 rounded-full border shadow-xl backdrop-blur-xl transition-all duration-200 ${
          isOpen
            ? 'bg-[#00b95a] border-[#00b95a] text-white shadow-[#00b95a]/30'
            : 'bg-[#1a1a1a]/90 border-white/15 text-slate-200 hover:border-[#00b95a]/50 hover:text-white shadow-black/50'
        }`}
        title="Switch Language"
        id="language-switcher-btn"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {/* Flag */}
        <span className="text-lg leading-none">{activeLang.flag}</span>

        {/* Lang code */}
        <span className="text-[11px] font-mono font-bold uppercase tracking-wide">
          {activeLang.code}
        </span>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <ChevronUp className="w-3 h-3 opacity-70" />
        </motion.span>
      </motion.button>
    </div>
  );
};
