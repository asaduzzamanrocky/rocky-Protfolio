import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Search,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Filter,
  Globe,
  X,
  Zap,
  TrendingUp,
  ShieldAlert,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ThemeMode } from '../types';
import { AnalyticsService } from '../services/analyticsService';

interface ProjectsSectionProps {
  theme: ThemeMode;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const isLight = theme === 'light-contrast';

  const categories = [
    { id: 'all', label: 'All Projects (60+)', count: PROJECTS.length },
    { id: 'healthcare', label: 'Healthcare & Care Facilities', count: PROJECTS.filter(p => p.category === 'healthcare').length },
    { id: 'corporate', label: 'Corporate & Tech Solutions', count: PROJECTS.filter(p => p.category === 'corporate').length },
    { id: 'ecommerce', label: 'E-Commerce & WooCommerce', count: PROJECTS.filter(p => p.category === 'ecommerce').length },
    { id: 'uiux', label: 'UI/UX Case Studies (Behance)', count: PROJECTS.filter(p => p.category === 'uiux').length },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemsPerPage = 8;
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));

  // Reset pagination on category or search query change
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory, searchQuery]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const currentProjects = filteredProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleLiveClick = (project: Project, e: React.MouseEvent) => {
    AnalyticsService.trackEvent('project_click', `Visited: ${project.title}`, {
      projectId: project.id,
      domain: project.domain,
      category: project.category
    });
  };

  return (
    <section id="projects" className="py-20 sm:py-24 relative bg-transparent text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Case study grid header and filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8"
        >
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase block">
              Production Ecosystem // 60+ Live Platforms
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Featured Client Deployments &{' '}
              <span className="text-[#00b95a]">
                Case Studies
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Engineered for peak performance, sub-2s mobile loading, and measurable conversion gains across global markets.
            </p>
          </div>

          {/* Project Search */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Bar */}
            <div className="w-full sm:w-64 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search platforms..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-full text-xs font-mono border focus:outline-none transition-all ${isLight
                  ? 'bg-slate-50 border-slate-300 text-slate-900 focus:border-slate-500'
                  : 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-orange-500/50 focus:bg-white/[0.07]'
                  }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Filter Pills & View Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all flex items-center gap-2 ${isSelected
                    ? 'bg-[#00b95a]/20 text-[#00b95a] border border-[#00b95a]/50 shadow-[0_0_15px_rgba(0,185,90,0.25)]'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                    }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-[#00b95a]/30 text-white' : 'bg-white/10 text-slate-400'
                    }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </motion.div>

        {/* Editorial Showcase Mode */}
        {false ? (
          <div className="space-y-10 mb-12">
            {filteredProjects.map((project, index) => {
              const numStr = (index + 1).toString().padStart(2, '0');
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-3xl border p-6 sm:p-10 transition-all duration-500 group overflow-hidden ${isLight
                    ? 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm'
                    : 'bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black border-white/10 hover:border-orange-500/40 shadow-2xl'
                    }`}
                >
                  <div className="absolute right-4 -top-8 font-display font-black text-8xl sm:text-9xl text-white/[0.03] group-hover:text-orange-500/[0.07] pointer-events-none select-none transition-colors">
                    {numStr}
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-orange-500 font-bold tracking-wider">
                          {numStr} // {project.category.toUpperCase()}
                        </span>

                        {project.metrics && (
                          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                            <TrendingUp className="w-3 h-3" />
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
                        <Globe className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-slate-300 font-semibold">{project.domain}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLiveClick(project, e)}
                        className="px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all group-hover:scale-[1.02]"
                      >
                        <span>Launch Live Website</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <Layers className="w-3.5 h-3.5 text-orange-400" />
                        <span>Inspect Architecture</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Static responsive case-study grid */
          <div className="relative">
            {/* Side Floating Navigation Arrow (Left) */}
            {totalPages > 1 && (
              <button
                onClick={handlePrevPage}
                className="hidden xl:flex absolute -left-7 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-[#00b95a] hover:bg-[#00984a] text-white border border-white/20 shadow-2xl shadow-[#00b95a]/40 backdrop-blur-xl transition-all hover:scale-110 active:scale-95 group"
                title="Scroll Left (Previous 4x2 Set)"
                id="projects-grid-left-floating-arrow"
              >
                <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
            )}

            {/* Side Floating Navigation Arrow (Right) */}
            {totalPages > 1 && (
              <button
                onClick={handleNextPage}
                className="hidden xl:flex absolute -right-7 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-[#00b95a] hover:bg-[#00984a] text-white border border-white/20 shadow-2xl shadow-[#00b95a]/40 backdrop-blur-xl transition-all hover:scale-110 active:scale-95 group"
                title="Scroll Right (Next 4x2 Set)"
                id="projects-grid-right-floating-arrow"
              >
                <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}

            {/* Compact responsive project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {currentProjects.map((project, index) => {
                return (
                  <div
                    key={project.id}
                    className="rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 bg-[#1e1e1e] border-white/10 hover:border-[#00b95a]/40 hover:shadow-xl hover:shadow-[#00b95a]/10 min-h-[220px]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border bg-[#00b95a]/10 text-[#00b95a] border-[#00b95a]/20">
                          {project.category}
                        </span>

                        {project.metrics && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#00b95a]/15 text-[#00b95a] border border-[#00b95a]/30 flex items-center gap-1">
                            <TrendingUp className="w-2.5 h-2.5" />
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-base text-white group-hover:text-[#00b95a] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mt-0.5 mb-2.5">
                        <Globe className="w-3 h-3 text-[#00b95a] shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1 hover:underline"
                      >
                        <Layers className="w-3 h-3 text-[#00b95a]" />
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleLiveClick(project, e)}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium text-white bg-[#00b95a] hover:bg-[#00984a] flex items-center gap-1 transition-all shadow-sm"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Manual pagination controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Showing Page {currentPage + 1} of {totalPages} (8 platforms per page)</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevPage}
                    className="px-4 py-2 rounded-full bg-black/60 hover:bg-orange-500 text-white border border-white/15 text-xs font-mono transition-all flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {/* Page Pill Indicators */}
                  <div className="flex items-center gap-1 px-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx)}
                        className={`h-2 rounded-full transition-all ${currentPage === idx
                          ? 'w-6 bg-[#00b95a]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                        title={`Go to project page ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    className="px-4 py-2 rounded-full bg-[#00b95a] hover:bg-[#00984a] text-white font-medium text-xs font-mono transition-all flex items-center gap-1.5 shadow-md shadow-[#00b95a]/30"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
            <p className="text-sm text-slate-400">No projects found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {
        activeModalProject && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-8 shadow-2xl my-8 ${isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0e1017] border-red-500/30 text-white'
              }`}>

              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-red-600 text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-red-500/20 text-red-400">
                      {activeModalProject.category}
                    </span>
                    {activeModalProject.metrics && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                        {activeModalProject.metrics}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {activeModalProject.title}
                  </h3>
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-red-400 hover:underline flex items-center gap-1 mt-1"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>https://{activeModalProject.domain}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>

                <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Architecture & Strategic Execution
                  </h4>
                  <p>{activeModalProject.longDescription || activeModalProject.description}</p>
                </div>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Key Delivered Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
                  >
                    Close Window
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLiveClick(activeModalProject, e)}
                      className="px-5 py-2.5 rounded-xl font-display font-semibold text-xs text-white bg-red-600 hover:bg-red-500 flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                    >
                      <span>Launch Live Production Domain</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )
      }

    </section >
  );
};
