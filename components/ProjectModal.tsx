import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ArrowUpRight, Building2, User } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window Frame with Clean Rounded Corners */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF9F6] text-[#141413] rounded-3xl sm:rounded-[36px] shadow-2xl border border-black/10 overflow-hidden flex flex-col z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center transition-colors text-neutral-800 z-30 shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content Container */}
          <div className="w-full flex-1 modal-scroll-container p-6 sm:p-10">

          {/* Project Type & Category Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border shadow-sm ${
              project.projectType === 'company'
                ? 'bg-amber-100 text-amber-950 border-amber-300'
                : 'bg-emerald-100 text-emerald-950 border-emerald-300'
            }`}>
              {project.projectType === 'company' ? (
                <>
                  <Building2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Company Project · {project.company || 'Mite Technology'}</span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Personal Project</span>
                </>
              )}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-semibold tracking-wider uppercase">
              <Cpu className="w-3.5 h-3.5 text-orange-400" />
              {project.categoryLabel}
            </div>
          </div>

          {/* Title & Subtitle */}
          <h2 className="text-3xl sm:text-5xl font-editorial font-bold tracking-tight text-[#141413] mb-2">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-medium mb-6">
            {project.subtitle}
          </p>

          {/* Preview Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden mb-8 bg-neutral-100 border border-black/5 shadow-inner">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
              System Overview & Architecture
            </h3>
            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Achievements & Architecture highlights */}
          <div className="mb-8">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" /> Key Engineering Highlights
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {project.keyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-100/90 border border-neutral-200/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links / Action bar */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-200">
            {project.githubFrontendUrl && (
              <a
                href={project.githubFrontendUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-md"
              >
                <Github className="w-4 h-4" /> Frontend Repository <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.githubBackendUrl && (
              <a
                href={project.githubBackendUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-md"
              >
                <Github className="w-4 h-4" /> AI Backend Repository <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && !project.githubFrontendUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors shadow-md"
              >
                <Github className="w-4 h-4" /> View GitHub Source <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.projectType === 'company' && !project.githubUrl && !project.githubFrontendUrl && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-600 font-medium text-xs border border-neutral-200">
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Proprietary Enterprise Software · {project.company || 'Mite Technology'}</span>
              </div>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DF643B] text-white font-medium text-sm hover:bg-[#c9532d] transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatePresence>
  );
};

export default ProjectModal;
