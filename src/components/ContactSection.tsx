import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { AnalyticsService } from "../services/analyticsService";
import { ThemeMode } from "../types";
const services = [
  "New website",
  "Website redesign",
  "Website fixes & improvements",
  "UI/UX design",
  "Agency collaboration",
  "Remote role",
];
const faqs = [
  {
    q: "Can you work from an existing Figma design?",
    a: "Yes. Share the design, page list, and required functionality so we can review the scope for implementation.",
  },
  {
    q: "Can you improve a site instead of rebuilding it?",
    a: "Yes. We can start with the specific issue, review your current website, and decide whether a focused fix or a wider redesign makes sense.",
  },
  {
    q: "How much will my project cost?",
    a: "It depends on the scope, design readiness, content, functionality, and timeline. Send a short brief so we can discuss the work and a suitable quote.",
  },
];
export const ContactSection: React.FC<{ theme: ThemeMode }> = () => {
  const [state, submit, reset] = useForm("mdeodpqe");
  const [error, setError] = useState("");
  useEffect(() => {
    if (state.succeeded)
      AnalyticsService.trackEvent("contact_submit", "Project enquiry accepted");
  }, [state.succeeded]);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    try {
      await submit(event);
    } catch {
      setError(
        "The message could not be sent. Please try again or email me directly.",
      );
    }
  };
  return (
    <section id="contact" className="studio-section studio-contact">
      <div className="studio-wrap">
        <div className="studio-contact-grid">
          <div>
            <p className="studio-eyebrow">05 / YOUR NEXT CHAPTER</p>
            <h2>
              What should your
              <br />
              website do
              <br />
              <span>better?</span>
            </h2>
            <p className="contact-intro">
              A new idea, an existing website, or an agency project. Tell me a
              little about it, and let’s work out the next step.
            </p>
            <a
              className="studio-contact-email"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              {PERSONAL_INFO.email}
              <ArrowUpRight size={20} />
            </a>
            <div className="contact-socials">
              <a
                href={PERSONAL_INFO.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  AnalyticsService.trackEvent(
                    "whatsapp_click",
                    "Contact WhatsApp",
                  )
                }
              >
                WhatsApp <ArrowUpRight size={16} />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="contact-location">
              Based in Barishal, Bangladesh. Collaborating remotely.
            </p>
          </div>
          <div className="studio-form-panel">
            {state.succeeded ? (
              <div role="status" className="studio-form-success">
                <CheckCircle2 size={36} />
                <h3>Thanks for reaching out.</h3>
                <p>
                  Your enquiry was accepted. I’ll review your message and get
                  back to you. You can also contact me by email or WhatsApp.
                </p>
                <button
                  className="studio-outline-button"
                  onClick={() => {
                    reset();
                    setError("");
                  }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="studio-form">
                <h3>A little context goes a long way.</h3>
                <div className="form-two-columns">
                  <div>
                    <label htmlFor="contact-name">
                      Your name <span>(required)</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      placeholder="Your name or company"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email">
                      Email <span>(required)</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@company.com"
                    />
                    <ValidationError field="email" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service-select">What do you need?</label>
                  <select id="service-select" name="service">
                    {services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-website">
                    Website or design link <span>(optional)</span>
                  </label>
                  <input
                    id="contact-website"
                    type="url"
                    name="website"
                    placeholder="https://"
                    maxLength={2000}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message">
                    Tell me about the project <span>(required)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    maxLength={5000}
                    placeholder="What needs to change? Include your goals and target timeline."
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  className="studio-button"
                  disabled={state.submitting}
                >
                  {state.submitting
                    ? "Sending your enquiry…"
                    : "Discuss my project"}
                  <ArrowUpRight size={18} />
                </button>
                {(error || state.errors?.getFormErrors().length > 0) && (
                  <p role="alert" className="form-error">
                    {error ||
                      state.errors
                        ?.getFormErrors()
                        .map((error) => error.message)
                        .join(" ")}{" "}
                    You can email me directly if the problem continues.
                  </p>
                )}
                <p className="studio-form-note">
                  Your details are sent through Formspree to handle your
                  enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
        <div className="studio-faq">
          <p className="studio-eyebrow">BEFORE WE START</p>
          <div>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
