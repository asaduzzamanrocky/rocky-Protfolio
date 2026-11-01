import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeMode } from "../types";

interface Props {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  activeSection: string;
}
const links = [
  { name: "Work", id: "projects" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
];
export const Navbar: React.FC<Props> = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="studio-header">
      <div className="studio-wrap studio-header-inner">
        <a href="#hero" className="studio-brand" onClick={() => setOpen(false)}>
          <img src="/favicon.png" alt="" width={36} height={36} />
          <span>
            Rocky<span className="brand-period">.</span>
            <small>DESIGN & DEVELOPMENT</small>
          </span>
        </a>
        <nav aria-label="Main navigation" className="studio-desktop-nav">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "location" : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="studio-header-actions">
          <a
            href="#contact"
            className="studio-header-cta"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            ref={toggle}
            id="mobile-menu-toggle-btn"
            className="studio-menu-toggle"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!open}
          className="studio-mobile-nav"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.name}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
};
