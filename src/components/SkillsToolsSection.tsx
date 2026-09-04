import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Layout,
  Boxes,
  Database,
  Code2,
  Code,
  FileCode,
  Cpu,
  Monitor,
  Image,
  PenTool,
  BookOpen,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  Sliders,
  Zap,
  BarChart2,
  Search,
  CheckCircle2,
  Gauge,
  Cloud,
  Server,
  Network,
  Bot,
  Sparkles,
  Users,
  Lock,
  Terminal,
  Layers
} from 'lucide-react';
import { TOOLS_SKILLS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface SkillsToolsSectionProps {
  theme: ThemeMode;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Layout,
  Boxes,
  Database,
  Code2,
  Code,
  FileCode,
  Cpu,
  Monitor,
  Image,
  PenTool,
  BookOpen,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  Sliders,
  Zap,
  BarChart2,
  Search,
  CheckCircle2,
  Gauge,
  Cloud,
  Server,
  Network,
  Bot,
  Sparkles,
  Users,
  Lock,
  Terminal,
  Figma: Layout,
};

export const SkillsToolsSection: React.FC<SkillsToolsSectionProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const isLight = theme === 'light-contrast';

  const categories = [
    { id: 'all', label: 'Complete Toolbelt' },
    { id: 'web', label: 'WordPress & Web Architecture' },
    { id: 'design', label: 'UI/UX & Design Systems' },
    { id: 'ecommerce', label: 'WooCommerce & Payments' },
    { id: 'seo', label: 'Core Web Vitals & SEO' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'ai', label: 'AI & Marketing Tools' },
    { id: 'security', label: 'Security & DDoS Defense' },
  ];

  const filteredTools = TOOLS_SKILLS.filter((tool) => {
    return activeCategory === 'all' || tool.category === activeCategory;
  });

  return (
    <section id="skills" className="py-20 sm:py-24 relative bg-[#252525] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-3 mb-14"
        >
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase block">
            Arsenal & Technical Expertise
          </span>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            10+ years of battle-tested technologies leveraged to deploy 60+ responsive, lightning-fast digital solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all ${isSelected
                  ? 'bg-[#00b95a]/20 text-[#00b95a] border border-[#00b95a]/50 shadow-[0_0_12px_rgba(0,185,90,0.25)]'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool, index) => {
            const IconComponent = ICON_MAP[tool.iconName] || Code2;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                className="p-5 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 bg-white/[0.02] border-white/10 hover:border-[#00b95a]/40 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-[#00b95a]/10"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-[#00b95a]/10 text-[#00b95a] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#00b95a] border border-[#00b95a]/20">
                    {tool.highlight}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm text-white mb-1 group-hover:text-[#00b95a] transition-colors">
                  {tool.name}
                </h3>

                <div className="space-y-1.5 mt-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Proficiency</span>
                    <span className="text-white font-semibold">{tool.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00b95a] to-emerald-400 rounded-full shadow-[0_0_8px_rgba(0,185,90,0.5)] transition-all duration-1000"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Strengths Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#00b95a]/10 via-black/40 to-[#00b95a]/10 border border-[#00b95a]/30 text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00b95a]">
            <Zap className="w-4 h-4" />
            <span>CORE VALUE COMMITMENT</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            High-Converting UX • WCAG Accessibility • 90+ PageSpeed Scores
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Every WordPress deployment is architected for maximum security, zero bloat, mobile touch ergonomics, and rapid search engine discoverability.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
