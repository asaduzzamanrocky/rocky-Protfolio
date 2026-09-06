import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Globe2
} from 'lucide-react';
import { ThemeMode } from '../types';
import { ToolLogosMarquee } from './ToolLogosMarquee';
import { PERSONAL_INFO } from '../data/portfolioData';
import { heroVideoPosterImg } from '../assets/images';

interface HeroSectionProps {
  theme: ThemeMode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const isLight = theme === 'light-contrast';
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [shouldPlayVideo] = useState(() => {
    if (typeof window === 'undefined') return false;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    return window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches &&
      !connection?.saveData &&
      (navigator.hardwareConcurrency === undefined || navigator.hardwareConcurrency > 2);
  });

  // Smooth scroll transform
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.5]);

  // Ensure autoplay on mount
  useEffect(() => {
    if (!shouldPlayVideo || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { rootMargin: '100px' });

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldPlayVideo]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full pt-0 pb-12 overflow-hidden"
    >
      {/* Curved Container Card */}
      <motion.div
        style={{ y: heroY, opacity: opacityFade }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-[1920px] md:aspect-[3/2] lg:aspect-video rounded-b-[32px] md:rounded-b-[64px] overflow-hidden border-b border-x bg-[#252525] border-white/10 text-white"
      >
        {/* Futuristic Red Neon Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="hero-mobile-atmosphere" aria-hidden="true" />
          {shouldPlayVideo && (
            <video
              ref={videoRef}
              src="/Man_standing_with_red_neon_202609031435.mp4"
              poster={heroVideoPosterImg}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onCanPlay={() => setIsVideoReady(true)}
              className={`w-full h-full object-cover object-center transition-opacity duration-500 ${isVideoReady ? 'opacity-95' : 'opacity-0'}`}
            />
          )}
          {/* Subtle Gradient Overlays for Video Clarity and Clean Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#252525] via-transparent to-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#252525]/80 via-transparent to-[#252525]/40 z-10" />
        </div>

        {/* Content Container - Bottom Aligned so Video is Unobstructed */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-12 pt-28 sm:pt-40 md:pt-8 lg:pt-52 pb-8 sm:pb-12 md:pb-16 lg:pb-36 min-h-[calc(100svh-1rem)] sm:min-h-[700px] md:min-h-0 md:h-full flex flex-col justify-end">

          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end w-full">

            {/* Left Column: Compact Bottom-Left Brand Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-7 z-20 space-y-3 bg-black/40 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 max-w-xl"
            >
              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-semibold text-[#00b95a] tracking-wide font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Website Designer & Developer
                </div>
                <h1 className="font-display font-extrabold text-[clamp(1.5rem,7vw,2.25rem)] sm:text-3xl lg:text-4xl tracking-tight leading-tight text-white break-words text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  I Build, Fix & Improve Websites.
                </h1>
              </div>

              <h2 className="font-display font-medium text-sm sm:text-base text-slate-200 leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                I design, develop, redesign and fix websites that look better, work better and help businesses grow.
              </h2>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00b95a] hover:bg-[#00984a] text-white font-medium text-xs transition-all duration-300 shadow-md shadow-[#00b95a]/40 group"
                  id="hero-start-project-btn"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 text-xs font-medium transition-all backdrop-blur-md"
                  id="hero-explore-sites-btn"
                >
                  <span>Start a Project</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-300 hover:text-[#00b95a] transition-colors bg-black/40 rounded-full border border-white/10 backdrop-blur-sm"
                >
                  <Globe2 className="w-3.5 h-3.5 text-[#00b95a]" />
                  <span>Need help with an existing website? → Fix My Website</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Compact Executive Highlights Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-5 z-20 space-y-3"
            >
              {/* Executive Overview Compact Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md shadow-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#00b95a]/20 border border-[#00b95a]/40 flex items-center justify-center text-[#00b95a]">
                      <Sparkles className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">How I can help</div>
                      <div className="text-xs font-bold text-white">Design + development, focused on the real problem</div>
                    </div>
                  </div>
                  <span className="max-w-full text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-[#00b95a] border border-white/15">
                    Design • Build • Fix
                  </span>
                </div>

                {/* 2x2 Compact Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-sm font-display font-bold text-[#00b95a]">UI/UX Design</div>
                    <div className="text-[10px] font-mono text-slate-300">Clear interfaces for real users</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-sm font-display font-bold text-white">Web Development</div>
                    <div className="text-[10px] font-mono text-slate-300">Responsive websites and features</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-sm font-display font-bold text-white">Redesign & Repair</div>
                    <div className="text-[10px] font-mono text-slate-300">Better structure and working flows</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-sm font-display font-bold text-[#00b95a]">Optimization</div>
                    <div className="text-[10px] font-mono text-slate-300">Performance, usability and SEO</div>
                  </div>
                </div>

                {/* Core Disciplines List */}
                <div className="space-y-1.5 pt-1.5 border-t border-white/10 text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00b95a] shrink-0" />
                    <span className="min-w-0 break-words">WordPress is one platform I work with—not the whole offering.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00b95a] shrink-0" />
                    <span className="min-w-0 break-words">Start with your business need, then choose the right solution.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00b95a] shrink-0" />
                    <span className="min-w-0 break-words">New site, overdue redesign, focused repair or ongoing improvement.</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Scrolling Tools Logos Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-4 overflow-hidden lg:absolute lg:bottom-0 lg:left-0 lg:right-0"
        >
          <ToolLogosMarquee />
        </motion.div>

      </motion.div>
    </section>
  );
};
