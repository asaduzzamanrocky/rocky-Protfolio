import React from "react";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES, PERSONAL_INFO } from "../data/portfolioData";
import { ThemeMode } from "../types";
const roles = EXPERIENCES.filter((role) =>
  ["najah-brand", "dev-design-grow"].includes(role.id),
);
export const ExperienceSection: React.FC<{ theme: ThemeMode }> = () => (
  <section id="experience" className="studio-experience">
    <div className="studio-wrap experience-layout">
      <div>
        <p className="studio-eyebrow">04 / PROFESSIONAL BACKGROUND</p>
        <h2>
          Experience that
          <br />
          <span>informs the work.</span>
        </h2>
      </div>
      <div className="experience-roles">
        {roles.map((role) => (
          <article key={role.id}>
            <p>{role.company}</p>
            <h3>{role.role.replace(" & Lead WordPress Architect", "")}</h3>
            <span>{role.location}</span>
          </article>
        ))}
        <a
          className="studio-text-link"
          href={PERSONAL_INFO.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          View full professional background <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  </section>
);
