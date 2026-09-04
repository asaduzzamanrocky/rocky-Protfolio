import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, Shield, Layers, X } from 'lucide-react';
import { ThemeMode } from '../types';
import {
  minimalistJacketImg,
  studioHeadphonesImg,
  cosmeticBottleImg
} from '../assets/images';
import { AnalyticsService } from '../services/analyticsService';

interface BehindTheDesignsSectionProps {
  theme: ThemeMode;
}

interface ShowcaseItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  overview: string;
  technologies: string[];
}

export const BehindTheDesignsSection: React.FC<BehindTheDesignsSectionProps> = ({ theme }) => {
  const isLight = theme === 'light-contrast';
  const [activeModalItem, setActiveModalItem] = useState<ShowcaseItem | null>(null);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'nordic-outerwear',
      category: 'Apparel & E-Commerce Flagship',
      title: 'Nordic Outerwear Studio',
      shortDesc: 'Precision WooCommerce architecture with headless catalog rendering, resulting in a 3.4x checkout conversion lift.',
      image: minimalistJacketImg,
      tags: ['WooCommerce', 'Headless REST', 'Sub-0.8s LCP'],
      metrics: [
        { label: 'Conversion Lift', value: '+340%' },
        { label: 'Core Web Vitals', value: '99/100' },
        { label: 'Page Load Speed', value: '0.74s' }
      ],
      overview: 'Engineered a bespoke apparel platform for an ethical outerwear brand. Replaced an unoptimized page-builder setup with custom PHP 8.3 template hierarchy and Redis object caching.',
      technologies: ['WordPress 6.x Core', 'Custom WooCommerce Hooks', 'Redis Cache', 'Stripe Multi-Currency']
    },
    {
      id: 'aura-sound',
      category: 'Acoustic Hardware & Brand Identity',
      title: 'Aura Sound Systems',
      shortDesc: 'Minimalist editorial hardware showcase with interactive audio telemetry and synchronized frequency response visualization.',
      image: studioHeadphonesImg,
      tags: ['Brand System', 'Custom Theme', 'Audio Telemetry'],
      metrics: [
        { label: 'Bounce Rate', value: '-42%' },
        { label: 'Mobile Score', value: '98/100' },
        { label: 'Average Session', value: '4m 12s' }
      ],
      overview: 'Crafted the digital identity and web flagship for an audiophile acoustics company. Features custom ACF Block Gutenberg modules and zero-bloat vanilla JavaScript interactions.',
      technologies: ['ACF Pro Blocks', 'CSS Custom Properties', 'Vite Asset Pipeline', 'Cloudflare Edge Cache']
    },
    {
      id: 'botanical-essence',
      category: 'Luxury Skincare & Packaging',
      title: 'Botanical Essence Lab',
      shortDesc: 'Luxury skincare e-commerce platform with automated monthly subscription replenishment and international tax compliance.',
      image: cosmeticBottleImg,
      tags: ['Subscription Commerce', 'SEO Schema', 'Custom UX'],
      metrics: [
        { label: 'Subscription Retention', value: '88%' },
        { label: 'Organic Traffic', value: '+190%' },
        { label: 'TTFB Latency', value: '62ms' }
      ],
      overview: 'Built an ultra-minimalist apothecary and subscription skincare flagship. Integrated custom WooCommerce Subscriptions and JSON-LD structured product rich snippets.',
      technologies: ['WooCommerce Subscriptions', 'JSON-LD Rich Data', 'MySQL Query Optimizer', 'Tailwind CSS']
    }
  ];

  const handleOpenShowcase = (item: ShowcaseItem) => {
    setActiveModalItem(item);
    AnalyticsService.trackEvent('button_click', `Viewed Behind the Designs Showcase: ${item.title}`, {
      itemId: item.id,
    });
  };

  return (
    <section id="behind-the-designs" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">

      {/* Top Split Section - Exactly as in the Reference Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-20">

        {/* Left Column: Eyebrow + Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-4"
        >
          <span className="font-mono text-sm font-bold text-[#00b95a] tracking-wider block">
            Behind the Designs
          </span>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white">
            Shaping <br />
            Experiences That <br />
            Make Life Simpler
          </h2>
        </motion.div>

        {/* Right Column: Lead Copy + Subtext + "Get in touch" Button */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6 lg:pt-4"
        >
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            I'm a product designer and lead architect focused on building clean, intuitive interfaces that solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs sm:text-sm font-medium text-slate-400">
              Let's Build Something <br />
              <span className="text-white font-semibold">
                Meaningful Together
              </span>
            </div>

            {/* Green Pill Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#00b95a] hover:bg-[#00984a] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-[#00b95a]/25 group"
            >
              <span>Get in touch</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#00b95a] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="transform -rotate-45 font-bold text-xs">→</span>
              </span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* 3 Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.18,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -6 }}
            onClick={() => handleOpenShowcase(item)}
            className="group cursor-pointer rounded-[28px] sm:rounded-[36px] overflow-hidden border transition-all duration-300 flex flex-col bg-[#1e1e1e] border-white/10 hover:border-[#00b95a]/40 hover:shadow-[0_15px_40px_rgba(0,185,90,0.15)]"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/40">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/70 text-white backdrop-blur-md border border-white/15">
                  {item.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform -rotate-45" />
                </span>
              </div>
            </div>

            {/* Card Content Footer */}
            <div className="p-5 sm:p-6 space-y-2.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl transition-colors text-white group-hover:text-[#00b95a]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm line-clamp-2 mt-1 text-slate-400">
                  {item.shortDesc}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border bg-white/5 text-slate-300 border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Showcase Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden border p-6 sm:p-8 shadow-2xl bg-[#1e1e1e] border-[#00b95a]/40 text-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Title */}
            <div className="space-y-2 pr-10">
              <span className="text-xs font-mono text-[#00b95a] font-bold uppercase tracking-wider">
                {activeModalItem.category}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl">
                {activeModalItem.title}
              </h3>
            </div>

            {/* Overview */}
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {activeModalItem.overview}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {activeModalItem.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 rounded-2xl border text-center bg-white/5 border-white/10"
                >
                  <div className="text-xs font-mono text-slate-400">{m.label}</div>
                  <div className="font-display font-bold text-lg text-[#00b95a] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">Architectural Stack:</span>
              <div className="flex flex-wrap gap-2">
                {activeModalItem.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#00b95a]/10 text-[#00b95a] border border-[#00b95a]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setActiveModalItem(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00b95a] hover:bg-[#00984a] text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveModalItem(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
};
