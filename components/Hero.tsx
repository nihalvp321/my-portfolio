import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface HeroProps {
  onOpenProjectModal: (project: Project) => void;
  onOpenBioModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenProjectModal, onOpenBioModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = PROJECTS_DATA[currentSlide];

  // Auto-advance carousel every 6 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECTS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  return (
    <section id="about" className="pt-4 pb-8 sm:pb-12 scroll-mt-6">
      {/* ===== GIANT EDITORIAL HEADLINE ===== */}
      <div className="pt-2 sm:pt-4 pb-6 sm:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          {/* Main Editorial Name - Fully Responsive & Never Clipped */}
          <div className="w-full select-none overflow-hidden">
            <h1 className="font-editorial text-[clamp(1.9rem,6.8vw,7.2rem)] font-normal tracking-tight text-[#141413] leading-[0.92] uppercase flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-6 gap-y-2 break-words sm:break-normal">
              <span className="shrink-0 hover:text-[#DF643B] transition-colors duration-300">
                MOHAMMED
              </span>
              <span className="flex items-baseline gap-2.5 sm:gap-4 shrink-0 hover:text-[#DF643B] transition-colors duration-300">
                <span>NIHAL</span>
                <span className="font-editorial text-[0.75em] font-light text-neutral-400">VP</span>
              </span>
            </h1>
          </div>

          {/* Editorial Sub-bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-black/5 mt-3 text-xs sm:text-sm font-semibold tracking-wider text-neutral-600 uppercase">
            <div className="flex items-center gap-2 text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="text-[11px] sm:text-xs">AI ENGINEER — GENERATIVE AI, RAG & AI AGENTS</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-500 font-medium text-[11px] sm:text-xs">
              <span>Mite Technology</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Kerala, India
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== THE TWO HERO PANELS (ABOUT + INDEX) ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 pt-2 sm:pt-4">
        {/* PANEL 1: ABOUT (LEFT CARD - DESIGN MATCHING USER REFERENCE IMAGE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          onClick={onOpenBioModal}
          className="lg:col-span-4 bg-[#EBE9E4] rounded-[28px] sm:rounded-[34px] p-5 sm:p-7 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-400 relative overflow-hidden border border-black/5"
        >
          {/* Card Top Label */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#141413]">
              ABOUT
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 group-hover:text-black flex items-center gap-1 transition-colors">
              Read Bio <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>

          {/* Profile Card styled exactly like the user's reference mockup:
              Cutout PNG + circular neutral backdrop + top-left editorial monospace title + bottom-right angled sticker */}
          <div className="relative w-full aspect-[4/4.4] rounded-2xl sm:rounded-[24px] overflow-hidden bg-[#FAF9F6] border border-black/10 shadow-sm mb-4 select-none flex items-end justify-center">
            
            {/* Top-Left Monospace Editorial Info */}
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 pointer-events-none text-left">
              <div className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-[#141413] uppercase leading-tight">
                MOHAMMED NIHAL VP
              </div>
              <div className="font-mono text-[9px] sm:text-[9.5px] font-medium tracking-wide text-neutral-500 uppercase mt-0.5">
                AI ENGINEER · GENERATIVE AI & RAG
              </div>
            </div>

            {/* Circular Neutral Disc Backdrop */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[74%] aspect-square rounded-full bg-[#CDD1CA] shadow-inner pointer-events-none" />

            {/* Transparent Cutout of Mohammed Nihal VP */}
            <img
              src="/images/nihal-cutout.png"
              alt={PERSONAL_INFO.name}
              className="relative z-10 w-[88%] h-[88%] object-contain object-bottom filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Fine Bottom Baseline Rule */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10 z-15" />

            {/* Angled Sticky Note Sticker */}
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="bg-[#E4EDA0] text-[#1A1F13] px-3 py-1.5 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-[#CFDA7E] font-mono text-[9px] sm:text-[10px] font-bold leading-tight uppercase tracking-wider flex items-center gap-1.5 select-none">
                <div className="text-left">
                  <div>INTELLIGENT AGENTS.</div>
                  <div>PRODUCTION RAG.</div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-[#1A1F13]" />
              </div>
            </div>
          </div>

          {/* Card Info Snippet */}
          <div>
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
              Mohammed Nihal VP
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed line-clamp-2">
              Junior AI Engineer building enterprise RAG pipelines, autonomous agents, and production n8n workflows on AWS EC2.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="px-2.5 py-1 rounded-full bg-white/80 text-[10px] font-bold text-neutral-800 tracking-wide uppercase">
                LangGraph & RAG
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/80 text-[10px] font-bold text-neutral-800 tracking-wide uppercase">
                FastAPI & TypeScript
              </span>
            </div>
          </div>
        </motion.div>

        {/* PANEL 2: INDEX (RIGHT CARD - CAROUSEL WITH DOTS) */}
        <motion.div
          id="index"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="scroll-mt-6 lg:col-span-8 bg-[#66B3BA] text-white rounded-[28px] sm:rounded-[34px] p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm group min-h-[460px] sm:min-h-[520px]"
        >
          {/* Subtle geometric light in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar inside Index Card */}
          <div className="flex items-center justify-between relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#141413]/90">
              INDEX
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#141413]/70">
                0{currentSlide + 1} / 0{PROJECTS_DATA.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Carousel Visual Content */}
          <div className="relative my-4 sm:my-6 flex-1 flex items-center z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center"
              >
                {/* Visual Art/Mockup */}
                <div
                  onClick={() => onOpenProjectModal(activeProject)}
                  className="md:col-span-7 aspect-[16/10] rounded-2xl sm:rounded-[26px] overflow-hidden bg-black/10 shadow-lg cursor-pointer group/art relative"
                >
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/art:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-black text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      Explore Architecture <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="md:col-span-5 flex flex-col justify-center text-[#141413]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#141413]/70 mb-1">
                    {activeProject.categoryLabel}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#141413]/80 mb-2">
                    {activeProject.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#141413]/80 leading-relaxed mb-4 line-clamp-3">
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {activeProject.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-white/70 text-[10px] font-bold text-[#141413] tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(activeProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-md w-fit"
                  >
                    View System Spec <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar: THE DOT INDICATORS */}
          <div className="flex items-center justify-between pt-2 relative z-10">
            {/* The Dots Indicator */}
            <div className="flex items-center space-x-2.5">
              {PROJECTS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none ${
                    currentSlide === index
                      ? "w-8 h-2.5 bg-white shadow-sm"
                      : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <span className="text-[10px] font-bold uppercase tracking-widest text-[#141413]/60 hidden sm:inline">
              Swipe or use controls to browse
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
