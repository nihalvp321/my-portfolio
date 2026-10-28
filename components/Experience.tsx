import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Bot, Workflow, Cloud, Sparkles, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Bot className="w-5 h-5 text-orange-600" />,
    <Workflow className="w-5 h-5 text-teal-600" />,
    <Cloud className="w-5 h-5 text-indigo-600" />
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 border-t border-black/10 scroll-mt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#DF643B] flex items-center gap-1.5 mb-2">
            <Briefcase className="w-4 h-4" /> Professional Experience
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            Engineering at Mite Technology
          </h2>
        </div>
        <div className="mt-3 md:mt-0 text-left md:text-right">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-neutral-200/80 text-xs font-bold uppercase tracking-wider text-neutral-800">
            {EXPERIENCE_DATA.period}
          </span>
          <p className="text-xs text-neutral-500 mt-1 font-semibold uppercase tracking-wider">
            Junior AI Engineer • Full-Time
          </p>
        </div>
      </div>

      {/* Domain Pillars Interactive Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Tab Selector */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {EXPERIENCE_DATA.pillars.map((pillar, index) => (
            <button
              key={pillar.title}
              onClick={() => setActiveTab(index)}
              className={`text-left p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex items-start gap-4 ${
                activeTab === index
                  ? "bg-[#141413] text-white border-transparent shadow-xl"
                  : "bg-white text-neutral-800 border-black/10 hover:border-black/25 hover:bg-neutral-50"
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === index ? "bg-white/10" : "bg-neutral-100"}`}>
                {icons[index]}
              </div>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === index ? "text-orange-400" : "text-neutral-400"}`}>
                  Focus Pillar 0{index + 1}
                </span>
                <h3 className="font-editorial text-lg sm:text-xl font-bold mt-0.5 leading-snug">
                  {pillar.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column: Detailed points for active tab */}
        <div className="lg:col-span-8 bg-white rounded-3xl sm:rounded-[34px] p-6 sm:p-10 border border-black/10 shadow-sm min-h-[380px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-100 text-orange-600">
                  {icons[activeTab]}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Industry Deliverables
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#141413]">
                    {EXPERIENCE_DATA.pillars[activeTab].title}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                Production Verified
              </span>
            </div>

            <div className="space-y-4">
              {EXPERIENCE_DATA.pillars[activeTab].points.map((point, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: pIdx * 0.08 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF9F6] border border-black/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500 font-medium">
            <span>Stack: OpenAI, LangChain, LangGraph, n8n, FastAPI, Supabase, AWS EC2</span>
            <span className="text-[#DF643B] font-bold">Mite Technology Production Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
