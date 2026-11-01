import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ThemeMode } from "../types";
export const Footer: React.FC<{ theme: ThemeMode }> = () => (
  <footer className="studio-footer studio-wrap">
    <div>
      <a href="#hero" className="footer-name">
        Asaduzzaman Rocky<span>.</span>
      </a>
      <p>Thoughtful design. Practical development.</p>
    </div>
    <div className="footer-links">
      <a
        href={PERSONAL_INFO.links.behance}
        target="_blank"
        rel="noopener noreferrer"
      >
        Behance <ArrowUpRight size={15} />
      </a>
      <a
        href={PERSONAL_INFO.links.agency}
        target="_blank"
        rel="noopener noreferrer"
      >
        Dev Design Grow <ArrowUpRight size={15} />
      </a>
      <a href="#hero">
        Back to top <ArrowUp size={15} />
      </a>
    </div>
    <p className="footer-copyright">
      © {new Date().getFullYear()} Asaduzzaman Rocky
    </p>
  </footer>
);
