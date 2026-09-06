import React from 'react';
import { motion } from 'motion/react';
import { Code2, Gauge, LayoutTemplate, SearchCheck, Wrench } from 'lucide-react';
import { ThemeMode } from '../types';

interface ServicesSectionProps {
  theme: ThemeMode;
}

const services = [
  { title: 'Build a Website', description: 'Business websites, landing pages and custom web solutions.', icon: Code2 },
  { title: 'Fix a Website', description: 'Bugs, broken layouts, forms, responsiveness and functionality.', icon: Wrench },
  { title: 'Redesign a Website', description: 'Modern UI, better UX, responsive layouts and improved structure.', icon: LayoutTemplate },
  { title: 'Improve a Website', description: 'Performance, usability, SEO, accessibility and conversion improvements.', icon: Gauge },
  { title: 'Custom Web Development', description: 'Websites and web applications built with the right technology for the project.', icon: SearchCheck },
];

const problems = ['Outdated design', 'Broken mobile layout', 'Slow website', 'Broken forms', 'Poor navigation', 'Bad UX', 'Website bugs', 'WordPress issues', 'Landing page problems', 'Feature & integration problems', 'Website redesign', 'Website optimization'];

const technologyGroups = [
  { name: 'Design', items: ['Figma', 'Adobe XD'] },
  { name: 'Frontend', items: ['React Integrations', 'CSS3/JS', 'Tailwind/CSS3'] },
  { name: 'Backend', items: ['PHP 8', 'Custom API Integrations'] },
  { name: 'CMS / Platforms', items: ['WordPress', 'Elementor Pro', 'WooCommerce'] },
  { name: 'Tools', items: ['HubSpot CRM', 'Google Cloud Platform (GCP)'] },
];

export const ServicesSection: React.FC<ServicesSectionProps> = () => (
  <section id="services" className="py-16 sm:py-20 relative text-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-8">
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase">Services</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight">What I Can Help You With</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">From a new build to a focused fix, I choose the practical next step for your website.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return <motion.article key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-white/10 bg-[#1e1e1e] p-5 hover:border-[#00b95a]/40 transition-colors">
              <div className="mb-4 inline-flex rounded-xl bg-[#00b95a]/10 p-2.5 text-[#00b95a]"><Icon className="w-5 h-5" /></div>
              <h3 className="font-display font-bold text-base text-white">{service.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{service.description}</p>
            </motion.article>;
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase">Website Problems I Solve</span>
          <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl tracking-tight">Clearer, faster, easier-to-use websites.</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {problems.map((problem) => <span key={problem} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">{problem}</span>)}
          </div>
        </div>
        <div>
          <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase">My Process</span>
          <ol className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Discover', 'Audit', 'Plan', 'Design', 'Develop / Fix', 'Test & Launch'].map((step, index) => <li key={step} className="rounded-2xl border border-white/10 bg-[#1e1e1e] p-4"><span className="font-mono text-xs text-[#00b95a]">0{index + 1}</span><p className="mt-2 text-sm font-semibold text-white">{step}</p></li>)}
          </ol>
        </div>
      </div>

      <div>
        <span className="font-mono text-xs font-bold text-[#00b95a] tracking-widest uppercase">Supporting Technologies</span>
        <p className="mt-2 text-sm text-slate-400">Tools support the solution; they are never the starting point.</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {technologyGroups.map((group) => <div key={group.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"><h3 className="font-display text-sm font-bold text-white">{group.name}</h3><div className="mt-3 flex flex-wrap gap-1.5">{group.items.map((item) => <span key={item} className="text-[11px] text-slate-400">{item}</span>)}</div></div>)}
        </div>
      </div>
    </div>
  </section>
);
