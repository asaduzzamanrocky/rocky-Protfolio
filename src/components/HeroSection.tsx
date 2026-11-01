import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ThemeMode } from "../types";

export const HeroSection: React.FC<{ theme: ThemeMode }> = () => (
  <section id="hero" className="studio-hero studio-wrap">
    <div className="hero-kicker">
      <span className="studio-dot" /> Independent designer & developer{" "}
      <span className="hero-location">
        Based in Bangladesh · Working globally
      </span>
    </div>
    <div className="studio-hero-grid">
      <div>
        <p className="studio-eyebrow">ASADUZZAMAN ROCKY</p>
        <h1>
          Good design.
          <br />
          Useful websites.
          <br />
          <span>Built together.</span>
        </h1>
        <p className="studio-lead">
          I help businesses and agency teams build, redesign, and improve
          websites. Thoughtful interfaces. Practical development. A clear next
          step for your visitors.
        </p>
        <div className="studio-actions">
          <a className="studio-button" href="#projects">
            Explore my work <ArrowDown size={18} />
          </a>
          <a className="studio-text-link" href="#contact">
            Let’s talk about your website <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-disciplines">
          <span>UI/UX design</span>
          <span>WordPress & Elementor</span>
          <span>Website improvements</span>
        </div>
      </div>
      <div className="hero-project-scene">
        <div className="scene-topline">
          <span>A CLOSER LOOK AT THE WORK</span>
          <span>01 / HEALTHCARE</span>
        </div>
        <a
          href="#projects"
          className="hero-project-window"
          aria-label="Explore the Aabe Home Healthcare project"
        >
          <div className="studio-browser-bar" aria-hidden="true">
            <span>● ● ●</span>
            <span>aabehomehealthcare.com</span>
            <ArrowUpRight size={14} />
          </div>
          <img
            src="/projects/aabe.jpg"
            alt="Aabe Home Healthcare website homepage"
            width={1265}
            height={712}
            fetchPriority="high"
          />
        </a>
        <div className="scene-caption">
          <div>
            <span className="studio-eyebrow">THE FOCUS</span>
            <p>
              Clear services.
              <br />A clear next step.
            </p>
          </div>
          <a
            href="#projects"
            aria-label="View selected projects"
            className="studio-round-link"
          >
            <ArrowUpRight size={28} />
          </a>
        </div>
        <div className="scene-bottom">
          <span>DESIGN THINKING → DEVELOPMENT</span>
          <span>BUILT FOR PEOPLE</span>
        </div>
      </div>
    </div>
    <div className="hero-bottom">
      <span>From the first idea to the details that matter.</span>
      <a href="#projects">
        Scroll to selected work <ArrowDown size={16} />
      </a>
    </div>
  </section>
);
