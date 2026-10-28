import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface EducationProps {
  onOpenCertificate?: (cert: CertificationItem) => void;
}

const Education: React.FC<EducationProps> = ({ onOpenCertificate }) => {
  return (
    <section id="education" className="py-12 sm:py-16 border-t border-black/10 scroll-mt-6">
      {/* Education Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#DF643B] flex items-center gap-1.5 mb-2">
            <GraduationCap className="w-4 h-4" /> Academic Background
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            Education & Qualifications
          </h2>
        </div>
      </div>

      {/* Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {EDUCATION_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#DF643B]" /> {item.period}
                </span>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Academic 0{idx + 1}
                </span>
              </div>

              <h3 className="font-editorial text-2xl font-bold text-[#141413] mb-2 leading-snug">
                {item.degree}
              </h3>
              <p className="text-sm font-semibold text-neutral-600 mb-2">
                {item.institution}
              </p>
              {item.specialization && (
                <div className="inline-block px-3 py-1 rounded-xl bg-orange-50 border border-orange-200 text-xs font-semibold text-orange-800 mb-4">
                  {item.specialization}
                </div>
              )}
              {item.details && (
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.details}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Subsection */}
      <div className="pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700 flex items-center gap-1.5 mb-2">
              <Award className="w-4 h-4" /> Professional Credentials
            </span>
            <h3 className="font-editorial text-2xl sm:text-4xl font-bold tracking-tight text-[#141413]">
              Industry Certifications & Licensure
            </h3>
          </div>
        </div>

        <div className="space-y-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Background ambient badge glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                {/* Certificate Preview Image */}
                <div className="lg:col-span-4">
                  <div
                    onClick={() => onOpenCertificate && onOpenCertificate(cert)}
                    className="relative group rounded-2xl overflow-hidden border border-neutral-200 shadow-sm cursor-pointer bg-neutral-50 aspect-[4/3] flex items-center justify-center"
                  >
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Award className="w-16 h-16 text-blue-500" />
                    )}
                    <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" /> View Certificate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified by IBM
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" /> Issued: {cert.issuedDate}
                      </span>
                    </div>

                    <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141413] mb-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-semibold text-neutral-700 mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {cert.skills && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-700 border border-neutral-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-neutral-100">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <span>Verify on Credly</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onOpenCertificate && onOpenCertificate(cert)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 bg-white text-xs font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-100 transition-colors shadow-sm"
                    >
                      <Eye className="w-4 h-4" /> View Full Certificate
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
