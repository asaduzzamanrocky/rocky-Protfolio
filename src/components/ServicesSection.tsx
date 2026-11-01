import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ThemeMode } from "../types";
const services = [
  {
    title: "Design & build",
    text: "A new business website, landing page, or WordPress build. From structure and interface design to a responsive website.",
    items: "UI/UX design · WordPress · Elementor",
  },
  {
    title: "Redesign & improve",
    text: "Give an existing website a clearer structure, a more consistent interface, and a better experience on mobile.",
    items: "Website redesign · Usability · Responsive layouts",
  },
  {
    title: "Fix & support",
    text: "Resolve broken layouts, forms, and website issues. Start with a focused review, then agree the work that is needed.",
    items: "Troubleshooting · Website updates · Ongoing support",
  },
  {
    title: "An agency partner",
    text: "Turn approved designs into WordPress and Elementor websites. A practical development partner for your next project.",
    items: "Figma to WordPress · Development collaboration",
  },
];
export const ServicesSection: React.FC<{ theme: ThemeMode }> = () => (
  <section id="services" className="studio-section studio-services">
    <div className="studio-wrap">
      <div className="studio-section-heading">
        <div>
          <p className="studio-eyebrow">02 / HOW I CAN HELP</p>
          <h2>
            One partner.
            <br />
            <span>From idea to improvement.</span>
          </h2>
        </div>
        <p>
          Bring a plan, a design, or a website that needs attention. We’ll work
          out the right next step.
        </p>
      </div>
      <div className="studio-service-grid">
        {services.map((service, index) => (
          <article className="studio-service" key={service.title}>
            <span className="service-number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span className="service-tools">{service.items}</span>
            <a
              href="#contact"
              aria-label={`Discuss ${service.title.toLowerCase()}`}
            >
              <ArrowUpRight size={23} />
            </a>
          </article>
        ))}
      </div>
      <div className="studio-process">
        <p className="studio-eyebrow">A CLEAR PATH THROUGH THE PROJECT</p>
        <ol>
          {[
            {
              name: "Understand",
              text: "Audience, goals, scope, and what needs to change.",
            },
            {
              name: "Design",
              text: "Structure and interfaces built around the people using them.",
            },
            {
              name: "Develop",
              text: "Responsive implementation with practical, reusable patterns.",
            },
            {
              name: "Refine",
              text: "Review the key journeys, resolve feedback, and plan launch.",
            },
          ].map((step, index) => (
            <li key={step.name}>
              <span>0{index + 1} /</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
