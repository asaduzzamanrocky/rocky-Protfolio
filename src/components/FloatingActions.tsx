import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Mail, X, ChevronUp, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AnalyticsService } from '../services/analyticsService';

export const FloatingActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Auto-hide tooltip after 5s
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const actions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      sublabel: 'Chat instantly',
      icon: <MessageCircle className="w-5 h-5" />,
      href: PERSONAL_INFO.links.whatsapp,
      color: 'bg-emerald-500 hover:bg-emerald-400',
      glow: 'shadow-emerald-500/40',
      target: '_blank',
      onClick: () => AnalyticsService.trackEvent('button_click', 'Floating WhatsApp Click'),
    },
    {
      id: 'email',
      label: 'Send Email',
      sublabel: PERSONAL_INFO.email,
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${PERSONAL_INFO.email}?subject=Project Inquiry from Portfolio`,
      color: 'bg-[#00b95a] hover:bg-[#00984a]',
      glow: 'shadow-[#00b95a]/40',
      target: '_self',
      onClick: () => AnalyticsService.trackEvent('button_click', 'Floating Email Click'),
    },
    {
      id: 'quick-message',
      label: 'Quick Message',
      sublabel: 'Contact form',
      icon: <Send className="w-5 h-5" />,
      href: '#contact',
      color: 'bg-blue-500 hover:bg-blue-400',
      glow: 'shadow-blue-500/40',
      target: '_self',
      onClick: () => {
        AnalyticsService.trackEvent('button_click', 'Floating Quick Message Click');
        setIsOpen(false);
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Action items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-2.5"
          >
            {actions.map((action, i) => (
              <motion.a
                key={action.id}
                href={action.href}
                target={action.target}
                rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={action.onClick}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
                className={`flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-full text-white shadow-xl ${action.color} ${action.glow} transition-all hover:scale-105 group`}
                id={`floating-${action.id}-btn`}
              >
                {/* Icon circle */}
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  {action.icon}
                </div>
                {/* Label */}
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">{action.label}</div>
                  <div className="text-[10px] opacity-75 leading-tight truncate max-w-[130px]">{action.sublabel}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip bubble — shown on load */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            className="relative bg-[#1a1a1a] text-white border border-[#00b95a]/40 p-3 rounded-2xl shadow-xl max-w-[200px] text-xs font-mono flex items-start gap-2"
          >
            <div>
              <div className="flex items-center gap-1.5 text-[#00b95a] font-bold mb-0.5">
                <span className="w-2 h-2 rounded-full bg-[#00b95a] animate-pulse" />
                <span>Rocky is Online</span>
              </div>
              <p className="text-slate-300 text-[10px] leading-relaxed">
                Need a website or speed audit? Let's connect!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white flex-shrink-0 mt-0.5"
            >
              <X className="w-3 h-3" />
            </button>
            {/* Caret */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1a1a1a] border-r border-b border-[#00b95a]/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB toggle button */}
      <motion.button
        onClick={() => { setIsOpen(p => !p); setShowTooltip(false); }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative ${isOpen
            ? 'bg-slate-700 shadow-black/50 rotate-45'
            : 'bg-gradient-to-tr from-emerald-600 to-[#00b95a] shadow-[#00b95a]/50'
          }`}
        title="Contact Options"
        id="floating-actions-toggle-btn"
        aria-label="Open contact options"
        aria-expanded={isOpen}
        style={{ transition: 'transform 0.3s, background 0.3s' }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center leading-none"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white fill-white/20" />
          )}
        </motion.div>

        {/* Pulsing beacon */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b95a] opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00b95a] border-2 border-[#252525]" />
          </span>
        )}
      </motion.button>
    </div>
  );
};
