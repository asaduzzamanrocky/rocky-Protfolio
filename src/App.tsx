/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { DatalinesWithGrid } from './components/neonblade-ui/datalines-with-grid';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';
import { ServicesSection } from './components/ServicesSection';
import { LoadingScreen } from './components/LoadingScreen';
import { ThemeMode } from './types';
import { AnalyticsService } from './services/analyticsService';

function AppInner() {
  const [theme, setTheme] = useState<ThemeMode>('dark-crimson');
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef<HTMLDivElement>(null);

  // High-performance Framer Motion Parallax Hooks
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms for ambient atmospheric light effects across the page
  const ambientOrb1Y = useTransform(scrollYProgress, [0, 1], [-40, 520]);
  const ambientOrb2Y = useTransform(scrollYProgress, [0, 1], [150, -350]);
  const ambientGlowOpacity = useTransform(smoothProgress, [0, 1], [0.15, 0.9]);

  useEffect(() => {
    // Initialize analytics telemetry
    AnalyticsService.initialize();
    AnalyticsService.trackEvent('page_view', 'Home Page View');

    if (window.matchMedia('(pointer: fine)').matches) {
      const cursorDot = document.createElement('div');
      const cursorRing = document.createElement('div');

      cursorDot.className = 'custom-cursor-dot';
      cursorRing.className = 'custom-cursor-ring';

      document.body.appendChild(cursorDot);
      document.body.appendChild(cursorRing);

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let ringX = mouseX;
      let ringY = mouseY;
      let animationFrameId = 0;
      let cursorNeedsUpdate = true;

      const handlePointerMove = (event: PointerEvent) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursorNeedsUpdate = true;

        // The animation loop stops after the ring catches up. Restart it for
        // every new movement so subsequent pointer events are rendered too.
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(animateCursor);
        }
      };

      const handlePointerDown = () => {
        cursorRing.classList.add('cursor-active');
      };

      const handlePointerUp = () => {
        cursorRing.classList.remove('cursor-active');
      };

      const animateCursor = () => {
        if (!cursorNeedsUpdate) {
          animationFrameId = 0;
          return;
        }

        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

        cursorNeedsUpdate = Math.abs(mouseX - ringX) > 0.5 || Math.abs(mouseY - ringY) > 0.5;
        animationFrameId = cursorNeedsUpdate ? requestAnimationFrame(animateCursor) : 0;
      };

      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerdown', handlePointerDown);
      window.addEventListener('pointerup', handlePointerUp);
      animationFrameId = requestAnimationFrame(animateCursor);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.25 }
      );

      const sectionIds = ['hero', 'services', 'projects', 'about', 'contact'];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointerup', handlePointerUp);
        cancelAnimationFrame(animationFrameId);
        observer.disconnect();
        document.body.removeChild(cursorDot);
        document.body.removeChild(cursorRing);
      };
    }

    // Section Scroll Spy for accurate navigation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sectionIds = ['hero', 'services', 'projects', 'about', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#252525] text-slate-100 transition-colors duration-300 relative overflow-x-hidden"
    >
      <motion.div
        style={{ opacity: ambientGlowOpacity }}
        className="performance-glow fixed top-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-[#00b95a]/25 to-transparent blur-2xl pointer-events-none z-40"
      />

      {/* Floating Parallax Ambient Orbs */}
      <motion.div
        style={{ y: ambientOrb1Y }}
        className="performance-glow fixed top-1/4 -right-44 w-96 h-96 rounded-full bg-[#00b95a]/15 blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: ambientOrb2Y }}
        className="performance-glow fixed top-2/3 -left-44 w-96 h-96 rounded-full bg-[#00b95a]/15 blur-[140px] pointer-events-none z-0"
      />

      {/* Sticky Header with Personal Branding */}
      <Navbar
        theme={theme}
        onThemeChange={setTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections with Parallax Scrolling */}
      <main className="relative z-10">
        <HeroSection
          theme={theme}
        />

        <ServicesSection theme={theme} />

        <div className="site-grid-wrapper">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-90" aria-hidden="true">
            <DatalinesWithGrid
              lineColor="#00b95a"
              shadowColor="#00b95a"
              bgGridColor="rgba(0, 185, 90, 0.07)"
              cellSize={50}
              maxLines={5}
              baseSpeed={1.2}
              lineLength={150}
              spawnProbability={0.04}
              opacity={0.3}
            />
          </div>

          <AboutSection
            theme={theme}
          />

          <ProjectsSection
            theme={theme}
          />

          <ExperienceSection
            theme={theme}
          />

          <ContactSection
            theme={theme}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
      />

      {/* Floating contact actions, including Quick Message */}
      <FloatingActions />

      {/* Minimalist Interactive Scroll Progress & Section Spy */}
      <ScrollProgressIndicator theme={theme} activeSection={activeSection} />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 500);
    return () => window.clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <AppInner />;
}
