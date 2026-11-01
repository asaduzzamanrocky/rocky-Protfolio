import React, { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, X } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { AnalyticsService } from "../services/analyticsService";
export const FloatingActions: React.FC = () => {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const outside = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <div ref={root} className="studio-contact-fab">
      {open && (
        <div id="quick-contact-options" className="quick-contact-options">
          <a
            href={PERSONAL_INFO.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              AnalyticsService.trackEvent(
                "whatsapp_click",
                "Quick contact WhatsApp",
              )
            }
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <Mail size={18} />
            Email Rocky
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Project enquiry →
          </a>
        </div>
      )}
      <button
        ref={toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="quick-contact-options"
        aria-label={open ? "Close contact options" : "Open contact options"}
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
