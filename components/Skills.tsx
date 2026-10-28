import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Wrench, CheckCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const Skills: React.FC = () => {
  const icons = [
    <Cpu className="w-5 h-5 text-orange-600" />,
    <Code className="w-5 h-5 text-teal-600" />,
    <Database className="w-5 h-5 text-indigo-600" />,
    <Wrench className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-black/10 scroll-mt-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#DF643B] flex items-center gap-1.5 mb-2">
            <Cpu className="w-4 h-4" /> Technical Proficiency
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            Skills & Capabilities
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-md mt-2 md:mt-0">
          Core competencies spanning LLM architecture, agentic orchestration, enterprise backends, and cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {SKILLS_DATA.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-neutral-100">
                  {icons[idx]}
                </div>
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#141413]">
                    {category.category}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-neutral-200 text-xs sm:text-sm font-semibold text-neutral-800 hover:border-black/30 hover:bg-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
              <span>Verified in Production</span>
              <span>Domain 0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
