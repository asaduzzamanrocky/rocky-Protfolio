import React, { useState, useEffect } from 'react';
import {
  Shield,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  Laptop,
  PhoneCall
} from 'lucide-react';
import { ThemeMode } from '../types';
import { detectDevice } from '../services/analyticsService';

interface NavbarProps {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onThemeChange,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDevice, setUserDevice] = useState<'Mac' | 'iPhone' | 'Windows' | 'Android' | 'Other'>('Mac');

  useEffect(() => {
    setUserDevice(detectDevice());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Works & 60+ Sites', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLight = theme === 'light-contrast';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between gap-3 sm:gap-5 rounded-full border px-3 sm:px-4 py-2.5 sm:py-3 ${isScrolled
            ? 'border-[#00b95a]/30 bg-[#0e1017]/95 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
            : 'border-white/10 bg-[#1b1b1b]/55 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
            }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group focus:outline-none shrink-0"
            id="nav-brand-link"
          >
            <img
              src="/favicon.png"
              alt="Asaduzzaman Rocky logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-contain ring-1 ring-white/10 shadow-[0_0_12px_rgba(0,185,90,0.08)] group-hover:scale-[1.03] transition-transform bg-transparent"
            />
          </a>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-3 text-[11px] lg:text-xs font-medium tracking-[0.04em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-full px-3 py-2 transition-all ${activeSection === link.href.substring(1)
                  ? 'bg-white/8 text-white border border-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 rounded-full bg-[#00b95a] px-3.5 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-[0_8px_22px_rgba(0,185,90,0.28)] hover:bg-[#00984a] transition-all"
              id="nav-get-in-touch-btn"
            >
              <span>Get in touch</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#00b95a] text-[11px] font-bold">
                →
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-3 rounded-3xl border border-white/10 bg-[#1e1e1e]/95 px-4 pt-3 pb-4 text-white shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-[#00b95a]" />
              <span className="text-xs font-mono text-slate-400">Device: {userDevice} (Optimized)</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00b95a]/15 text-[#00b95a] font-mono">
              60+ Live Sites
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-2xl px-3 py-2.5 text-xs font-medium ${activeSection === link.href.substring(1)
                  ? 'bg-[#00b95a]/15 text-[#00b95a] border border-[#00b95a]/30'
                  : 'bg-white/5 text-slate-300'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <a
              href="https://wa.me/8801714722651"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00b95a] px-3 py-2.5 text-xs font-medium text-white"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
