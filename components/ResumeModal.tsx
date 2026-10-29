import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    setDownloading(true);
    // Trigger download via anchor to public/Mohammed_Nihal_VP_Resume.pdf
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePdfUrl || '/Mohammed_Nihal_VP_Resume.pdf';
    link.download = 'Mohammed_Nihal_VP_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };


  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
Portfolio: ${PERSONAL_INFO.portfolio}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.summary}

TECHNICAL SKILLS:
${SKILLS_DATA.map(cat => `${cat.category}: ${cat.skills.join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE:
${EXPERIENCE_DATA.role} | ${EXPERIENCE_DATA.company} (${EXPERIENCE_DATA.period})
${EXPERIENCE_DATA.pillars.map(p => `• ${p.title}:\n${p.points.map(pt => `  - ${pt}`).join('\n')}`).join('\n')}

CERTIFICATIONS & INDUSTRY CREDENTIALS:
${CERTIFICATIONS_DATA.map(c => `• ${c.title} – ${c.issuer} (Issued: ${c.issuedDate})\n  Official Credly Verification: ${c.verifyUrl}`).join('\n')}

KEY ENGINEERING PROJECTS:
[Company Projects – Mite Technology]
${PROJECTS_DATA.filter(p => p.projectType === 'company').map(p => `• ${p.title} – ${p.subtitle} [${p.technologies.join(', ')}]\n${p.keyHighlights.map(h => `  - ${h}`).join('\n')}`).join('\n')}

[Personal Projects]
${PROJECTS_DATA.filter(p => p.projectType === 'personal').map(p => `• ${p.title} – ${p.subtitle} [${p.technologies.join(', ')}]\n${p.keyHighlights.map(h => `  - ${h}`).join('\n')}`).join('\n')}

EDUCATION:
${EDUCATION_DATA.map(e => `• ${e.degree} – ${e.institution} (${e.period})${e.specialization ? `\n  Specialization: ${e.specialization}` : ''}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div id="resume-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white text-neutral-900 rounded-3xl sm:rounded-[36px] shadow-2xl border border-neutral-300 overflow-hidden flex flex-col z-10 print:p-0 print:border-none print:shadow-none print:max-h-none print:overflow-visible print:rounded-none"
        >
          <div className="w-full flex-1 modal-scroll-container p-6 sm:p-12">
            {/* Action Bar (Top) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-200 mb-8 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-500">
                Official Curriculum Vitae
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Primary Download CV PDF Button */}
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#DF643B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c8532b] transition-all shadow-md active:scale-95"
                title="Download verified PDF format"
              >
                {downloading ? (
                  <>
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download CV (PDF)</span>
                  </>
                )}
              </button>


              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
                title="Copy Resume Plain Text"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Text"}
              </button>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors ml-1"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-neutral-700" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div id="resume-printable-area" className="space-y-7 font-sans text-neutral-900">
            {/* Header */}
            <div className="text-center border-b-2 border-neutral-800 pb-5">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-neutral-700 mt-1">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-neutral-600 mt-3 font-medium">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-700 hover:underline">{PERSONAL_INFO.email}</a>
                <span>|</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>|</span>
                <span>{PERSONAL_INFO.location}</span>
                <span>|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
                <span>|</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">GitHub</a>
                <span>|</span>
                <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">Portfolio</a>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h2 className="text-sm font-extrabold tracking-wider text-blue-900 uppercase border-b border-blue-900 pb-1 mb-2.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed text-justify">
                {PERSONAL_INFO.summary}
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-sm font-extrabold tracking-wider text-blue-900 uppercase border-b border-blue-900 pb-1 mb-2.5">
                TECHNICAL SKILLS
              </h2>
              <ul className="text-xs sm:text-sm space-y-1.5 text-neutral-800">
                {SKILLS_DATA.map((cat, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold sm:w-48 shrink-0 text-neutral-900">• {cat.category}:</span>
                    <span className="text-neutral-700">{cat.skills.join(', ')}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-sm font-extrabold tracking-wider text-blue-900 uppercase border-b border-blue-900 pb-1 mb-2.5">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline font-bold text-sm text-neutral-900">
                  <span>{EXPERIENCE_DATA.role} | {EXPERIENCE_DATA.company}</span>
                  <span className="text-neutral-600 text-xs sm:text-sm">{EXPERIENCE_DATA.period}</span>
                </div>
                <div className="mt-2.5 space-y-2.5">
                  {EXPERIENCE_DATA.pillars.map((pillar, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs sm:text-sm font-semibold italic text-neutral-800">
                        {pillar.title}
                      </h4>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-700 mt-1 space-y-0.5 pl-2">
                        {pillar.points.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Certifications & Industry Credentials */}
            <section>
              <h2 className="text-sm font-extrabold tracking-wider text-blue-900 uppercase border-b border-blue-900 pb-1 mb-2.5 flex items-center justify-between">
                <span>CERTIFICATIONS & INDUSTRY CREDENTIALS</span>
                <span className="text-[10px] font-bold text-blue-700 normal-case tracking-normal">IBM Innovation Centre for Education</span>
              </h2>
              <div className="space-y-2.5">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200/80">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-sm text-neutral-900">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>{cert.title}</span>
                      </div>
                      <span className="text-neutral-600 text-xs mt-0.5 sm:mt-0 font-medium">
                        Issued: {cert.issuedDate}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-700 mt-1.5 pl-6 flex flex-wrap items-center justify-between gap-2">
                      <span>Issued by: <strong className="text-neutral-900">{cert.issuer}</strong></span>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-bold text-xs hover:underline bg-white px-2.5 py-1 rounded-full border border-blue-300 shadow-sm"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>Verify on Credly</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>

                    <p className="text-xs text-neutral-600 mt-1.5 pl-6 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-sm font-extrabold tracking-wider text-blue-900 uppercase border-b border-blue-900 pb-1 mb-3 flex items-center justify-between">
                <span>KEY ENGINEERING PROJECTS</span>
                <span className="text-[10px] font-bold text-neutral-500 normal-case tracking-normal">
                  Company & Personal Systems
                </span>
              </h2>

              {/* Company Projects */}
              <div className="mb-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 mb-2.5 inline-block">
                  Company Projects · Mite Technology
                </div>
                <div className="space-y-3 pl-1">
                  {PROJECTS_DATA.filter(p => p.projectType === 'company').map((proj) => (
                    <div key={proj.id}>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900">
                        <span>{proj.title} – {proj.subtitle}</span>{' '}
                        <span className="font-normal italic text-neutral-600">
                          / {proj.technologies.join(', ')}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-700 mt-1 space-y-0.5 pl-2">
                        {proj.keyHighlights.map((hl, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Projects */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 mb-2.5 inline-block">
                  Personal Research & Open Source Projects
                </div>
                <div className="space-y-3 pl-1">
                  {PROJECTS_DATA.filter(p => p.projectType === 'personal').map((proj) => (
                    <div key={proj.id}>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900">
                        <span>{proj.title} – {proj.subtitle}</span>{' '}
                        <span className="font-normal italic text-neutral-600">
                          / {proj.technologies.join(', ')}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-700 mt-1 space-y-0.5 pl-2">
                        {proj.keyHighlights.map((hl, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-extrabold tracking-wider text-blue-900 uppercase border-b border-blue-900 pb-1 mb-2.5">
                EDUCATION
              </h2>
              <div className="space-y-2.5">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-neutral-900">
                        {edu.degree}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-700">
                        {edu.institution} {edu.specialization ? `| ${edu.specialization}` : ''}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-600 font-medium shrink-0 mt-0.5 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatePresence>
  );
};

export default ResumeModal;
