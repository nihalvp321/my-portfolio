import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Award, ShieldCheck } from 'lucide-react';
import { CertificationItem } from '../types';

interface CertificateModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#FAF9F6] text-[#141413] rounded-3xl sm:rounded-[36px] shadow-2xl border border-black/10 overflow-hidden flex flex-col z-10"
        >
          <div className="w-full flex-1 modal-scroll-container p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  Issued: {certification.issuedDate}
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                {certification.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                Issued by {certification.issuer}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-neutral-800" />
            </button>
          </div>

          {/* Certificate Image Frame */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-4 border border-black/10 shadow-inner mb-6">
            {certification.imageUrl ? (
              <img
                src={certification.imageUrl}
                alt={certification.title}
                className="w-full h-auto rounded-xl shadow-md border border-neutral-200 object-contain max-h-[60vh] mx-auto"
              />
            ) : (
              <div className="p-12 text-center text-neutral-400">
                <Award className="w-16 h-16 mx-auto mb-3 text-neutral-300" />
                Certificate preview unavailable
              </div>
            )}
          </div>

          {/* Actions & Verification Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs sm:text-sm text-neutral-600 max-w-md">
              <span>{certification.description}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {certification.imageUrl && (
                <a
                  href={certification.imageUrl}
                  download="IBM_AIML_Graduate_Certificate_Mohammed_Nihal_VP.png"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 bg-white text-xs font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-100 transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" /> Download Certificate
                </a>
              )}
              <a
                href={certification.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Verify on Credly</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatePresence>
  );
};

export default CertificateModal;
