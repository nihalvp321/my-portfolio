import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowUpRight, Github, ExternalLink, Sparkles, Building2, User } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onOpenProjectModal: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'company' | 'personal' | 'rag' | 'enterprise' | 'ml'>('all');

  const filterButtons = [
    { label: "ALL SYSTEMS", value: "all" },
    { label: "COMPANY PROJECTS", value: "company" },
    { label: "PERSONAL PROJECTS", value: "personal" },
    { label: "GENERATIVE AI & RAG", value: "rag" },
    { label: "ENTERPRISE SAAS", value: "enterprise" },
    { label: "HEALTHCARE & ML", value: "ml" },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'company') return p.projectType === 'company';
    if (selectedFilter === 'personal') return p.projectType === 'personal';
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 border-t border-black/10 scroll-mt-6">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#DF643B] flex items-center gap-1.5 mb-2">
            <Layers className="w-4 h-4" /> Systems Portfolio
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            Featured Engineering Projects
          </h2>
        </div>

        {/* Category & Scope Filters */}
        <div className="flex flex-wrap gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setSelectedFilter(btn.value as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                selectedFilter === btn.value
                  ? "bg-[#141413] text-white shadow-md"
                  : "bg-white text-neutral-600 hover:text-black border border-black/10 hover:border-black/20"
              }`}
            >
              {btn.value === 'company' && <Building2 className="w-3.5 h-3.5 text-amber-400" />}
              {btn.value === 'personal' && <User className="w-3.5 h-3.5 text-emerald-400" />}
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onOpenProjectModal(project)}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-5 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-neutral-800 shadow-sm border border-black/5">
                    {project.categoryLabel}
                  </div>
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${
                    project.projectType === 'company'
                      ? "bg-[#141413]/90 text-amber-300 border border-white/10"
                      : "bg-emerald-950/90 text-emerald-300 border border-emerald-500/20"
                  }`}>
                    {project.projectType === 'company' ? (
                      <>
                        <Building2 className="w-3 h-3 text-amber-400" />
                        <span>Company</span>
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 text-emerald-400" />
                        <span>Personal</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-editorial text-2xl font-bold text-[#141413] group-hover:text-[#DF643B] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#141413] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                  <span className="text-neutral-300">•</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    project.projectType === 'company'
                      ? 'bg-amber-100 text-amber-900 border border-amber-200'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                  }`}>
                    {project.projectType === 'company' ? `${project.company || 'Company'}` : 'Personal Project'}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tags */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-neutral-100 text-[10px] font-semibold text-neutral-800 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-neutral-50 text-[10px] font-semibold text-neutral-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;