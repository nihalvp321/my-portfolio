import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MapPin, Mail, Phone, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

const BioModal: React.FC<BioModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  if (!isOpen) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] text-[#141413] rounded-3xl sm:rounded-[36px] shadow-2xl border border-black/10 p-6 sm:p-10 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-neutral-200/70 hover:bg-neutral-300 flex items-center justify-center transition-colors text-neutral-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start mb-8">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 bg-[#FAF9F6] border border-black/10 shadow-md flex items-end justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76%] aspect-square rounded-full bg-[#CDD1CA] pointer-events-none" />
              <img
                src="/images/nihal-cutout.png"
                alt={PERSONAL_INFO.name}
                className="relative z-10 w-[88%] h-[88%] object-contain object-bottom"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#DF643B] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Professional Profile
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold tracking-tight text-[#141413]">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-medium mt-1">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs sm:text-sm text-neutral-600">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" /> {PERSONAL_INFO.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-neutral-400" /> {PERSONAL_INFO.email}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" /> {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-neutral-800 leading-relaxed text-sm sm:text-base border-t border-neutral-200 pt-6">
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                Executive Biography
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/80">
                <div className="text-xl font-editorial font-bold text-neutral-900">Mite Tech</div>
                <div className="text-[11px] uppercase font-semibold tracking-wider text-neutral-500 mt-0.5">Junior AI Engineer</div>
                <div className="text-xs text-neutral-600 mt-0.5">May 2025 – Present</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/80">
                <div className="text-xl font-editorial font-bold text-neutral-900">MCA</div>
                <div className="text-[11px] uppercase font-semibold tracking-wider text-neutral-500 mt-0.5">AI & Data Science</div>
                <div className="text-xs text-neutral-600 mt-0.5">Yenepoya University</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200/80">
                <div className="text-xl font-editorial font-bold text-blue-900">IBM</div>
                <div className="text-[11px] uppercase font-semibold tracking-wider text-blue-700 mt-0.5">AI & ML Graduate</div>
                <div className="text-xs text-blue-600 mt-0.5">Verified Credential</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200/80">
                <div className="text-xl font-editorial font-bold text-neutral-900">Core Focus</div>
                <div className="text-[11px] uppercase font-semibold tracking-wider text-neutral-500 mt-0.5">RAG & AI Agents</div>
                <div className="text-xs text-neutral-600 mt-0.5">Autonomous Systems</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-neutral-200">
            <a
              href={PERSONAL_INFO.resumePdfUrl || "/Mohammed_Nihal_VP_Resume.pdf"}
              download="Mohammed_Nihal_VP_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DF643B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#c9532d] transition-all shadow-md active:scale-95"
            >
              <Download className="w-4 h-4" /> Download CV (PDF)
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
            >
              View Full CV
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 text-neutral-800 font-medium text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            >
              <Mail className="w-4 h-4" /> Send Email <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="ml-auto px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BioModal;
