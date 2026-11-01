import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Search, X, ArrowDown } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import { Project, ThemeMode } from "../types";
import { AnalyticsService } from "../services/analyticsService";

const selectedIds = ["aabe-healthcare", "moringa-care", "family-transport"];
const selected = selectedIds.map((id) =>
  PROJECTS.find((project) => project.id === id)!,
);
const notes: Record<string, { need: string; approach: string; focus: string }> =
  {
    "aabe-healthcare": {
      need: "Make care services and enquiry routes easy to understand.",
      approach:
        "Bring service information, appointment access, and referrals into a clear website structure.",
      focus: "Service discovery & enquiries",
    },
    "moringa-care": {
      need: "Help families understand in-home care and find a way to get in touch.",
      approach:
        "Connect care information with contact, referral, and appointment options.",
      focus: "Care information & contact",
    },
    "family-transport": {
      need: "Help visitors understand transport services and find the booking route.",
      approach:
        "Present the service offering with a direct path to trip enquiries.",
      focus: "Service information & bookings",
    },
  };
const filters = [
  { id: "all", label: "All work" },
  { id: "healthcare", label: "Healthcare" },
  { id: "corporate", label: "Business" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "uiux", label: "UI/UX" },
];

export const ProjectsSection: React.FC<{ theme: ThemeMode }> = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!active || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [active]);
  const search = query.trim().toLowerCase();
  const results = PROJECTS.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      [p.title, p.domain, ...p.technologies].some((value) =>
        value.toLowerCase().includes(search),
      ),
  );
  const track = (project: Project) =>
    AnalyticsService.trackEvent("project_click", `Visited ${project.title}`, {
      projectId: project.id,
    });
  return (
    <section id="projects" className="studio-section studio-work">
      <div className="studio-wrap">
        <div className="studio-section-heading">
          <div>
            <p className="studio-eyebrow">01 / SELECTED WORK</p>
            <h2>
              Real websites.
              <br />
              <span>A closer look.</span>
            </h2>
          </div>
          <p>
            A few projects from the portfolio, with the context behind the
            interface and live websites you can explore.
          </p>
        </div>
        <div className="studio-project-list">
          {selected.map((project, index) => (
            <article className="studio-project" key={project.id}>
              <a
                className={`studio-project-image project-tone-${index}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}, opens in a new tab`}
                onClick={() => track(project)}
              >
                <div className="studio-browser-bar" aria-hidden="true">
                  <span>● ● ●</span>
                  <span>{project.domain}</span>
                  <ArrowUpRight size={15} />
                </div>
                <img
                  src={project.previewImage}
                  alt={`${project.title} homepage preview`}
                  width={1265}
                  height={712}
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-visit">
                  Visit website <ArrowUpRight size={16} />
                </span>
              </a>
              <div className="studio-project-content">
                <div className="studio-project-index">
                  <span>0{index + 1}</span>
                  <span>{index === 2 ? "TRANSPORTATION" : "HEALTHCARE"}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <dl>
                  <div>
                    <dt>PLATFORM</dt>
                    <dd>WordPress & Elementor</dd>
                  </div>
                  <div>
                    <dt>FOCUS</dt>
                    <dd>{notes[project.id].focus}</dd>
                  </div>
                </dl>
                <button
                  className="studio-text-link"
                  onClick={() => setActive(project)}
                  aria-label={`Explore ${project.title} project`}
                >
                  Explore the project <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="studio-archive-intro">
          <div>
            <span className="studio-eyebrow">THERE’S MORE TO EXPLORE</span>
            <p>Different businesses. Different website needs.</p>
          </div>
          <button
            className="studio-outline-button"
            aria-expanded={archiveOpen}
            aria-controls="project-archive"
            onClick={() => setArchiveOpen(!archiveOpen)}
          >
            {archiveOpen
              ? "Close project archive"
              : `Explore all ${PROJECTS.length} projects`}
            <ArrowDown size={17} />
          </button>
        </div>
        <div
          id="project-archive"
          hidden={!archiveOpen}
          className="studio-archive"
        >
          <div className="archive-toolbar">
            <div className="archive-search">
              <Search size={18} />
              <input
                type="search"
                aria-label="Search project archive"
                placeholder="Search projects or technologies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div
              className="archive-filters"
              role="group"
              aria-label="Filter project archive"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  aria-pressed={category === filter.id}
                  onClick={() => setCategory(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <p role="status" aria-live="polite" className="archive-result-count">
            {results.length} {results.length === 1 ? "project" : "projects"}
          </p>
          <div className="archive-grid">
            {results.map((project) => (
              <a
                className="archive-project"
                href={project.liveUrl}
                key={project.id}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track(project)}
              >
                <span className="studio-eyebrow">
                  {project.category === "uiux"
                    ? "DESIGN PROJECT"
                    : project.category.toUpperCase()}
                </span>
                <h3>
                  {project.title}
                  <ArrowUpRight size={20} />
                </h3>
                <span className="archive-domain">{project.domain}</span>
                <span className="archive-link-label">
                  {project.category === "uiux"
                    ? "View design project"
                    : "Visit website"}{" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
              </a>
            ))}
          </div>
          {results.length === 0 && (
            <button
              className="studio-text-link"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              No matches. Reset filters <ArrowUpRight size={18} />
            </button>
          )}
        </div>
      </div>
      {active && (
        <dialog
          ref={dialogRef}
          className="studio-dialog"
          aria-labelledby="project-dialog-title"
          onCancel={() => setActive(null)}
          onClose={() => setActive(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="studio-dialog-content">
            <button
              className="dialog-close"
              aria-label="Close project details"
              onClick={() => setActive(null)}
            >
              <X size={22} />
            </button>
            <p className="studio-eyebrow">
              PROJECT OVERVIEW / WORDPRESS & ELEMENTOR
            </p>
            <h2 id="project-dialog-title">{active.title}</h2>
            <img
              src={active.previewImage}
              width={1265}
              height={712}
              alt={`${active.title} homepage`}
            />
            <div className="dialog-detail-grid">
              <div>
                <h3>The website need</h3>
                <p>{notes[active.id].need}</p>
              </div>
              <div>
                <h3>The approach</h3>
                <p>{notes[active.id].approach}</p>
              </div>
            </div>
            <div className="dialog-role">
              <h3>Work shown</h3>
              <p>{active.longDescription}</p>
            </div>
            <div className="studio-actions">
              <a
                className="studio-button"
                href={active.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track(active)}
              >
                Visit live website <ArrowUpRight size={18} />
              </a>
              <button
                className="studio-text-link"
                onClick={() => setActive(null)}
              >
                Back to selected work
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};
