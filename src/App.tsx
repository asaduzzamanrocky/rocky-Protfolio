import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { ThemeMode } from "./types";
import { AnalyticsService } from "./services/analyticsService";

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>("dark-emerald");
  const [activeSection, setActiveSection] = useState("hero");
  const trackedVisit = useRef(false);
  useEffect(() => {
    AnalyticsService.initialize();
    if (!trackedVisit.current) {
      AnalyticsService.trackEvent("page_view", "Portfolio visit");
      trackedVisit.current = true;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="studio-site">
      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>
      <Navbar
        theme={theme}
        onThemeChange={setTheme}
        activeSection={activeSection}
      />
      <main id="main-content" tabIndex={-1}>
        <HeroSection theme={theme} />
        <ProjectsSection theme={theme} />
        <ServicesSection theme={theme} />
        <AboutSection theme={theme} />
        <ExperienceSection theme={theme} />
        <ContactSection theme={theme} />
      </main>
      <Footer theme={theme} />
      <FloatingActions />
    </div>
  );
}
