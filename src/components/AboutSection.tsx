import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ThemeMode } from "../types";
export const AboutSection: React.FC<{ theme: ThemeMode }> = () => (
  <section id="about" className="studio-section">
    <div className="studio-wrap studio-about-grid">
      <div className="studio-portrait">
        <img
          src="/rocky-portrait.jpg"
          alt="Asaduzzaman Rocky"
          width={1024}
          height={1024}
          loading="lazy"
        />
        <span>BARISHAL, BANGLADESH / WORKING REMOTELY</span>
      </div>
      <div className="studio-about-copy">
        <p className="studio-eyebrow">03 / THE PERSON BEHIND THE WORK</p>
        <h2>
          Design thinking.
          <br />
          Development skills.
          <br />
          <span>One conversation.</span>
        </h2>
        <p>
          I’m Asaduzzaman Rocky, a website designer and developer based in
          Bangladesh. I bring UI/UX design, WordPress, and Elementor together to
          help businesses and agency teams move their websites forward.
        </p>
        <p>
          Alongside client work, I’ve taught UI/UX design, digital skills, and
          eCommerce. That teaching experience shapes how I explain decisions,
          work through ideas, and collaborate with clients.
        </p>
        <div className="about-principles">
          <span>Clear communication</span>
          <span>Business context first</span>
          <span>Care in the details</span>
        </div>
        <a
          className="studio-text-link"
          href={PERSONAL_INFO.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          More about my background <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  </section>
);
