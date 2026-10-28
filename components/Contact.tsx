import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, Github, Linkedin, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 border-t border-black/10 scroll-mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        {/* Left Column: Direct Inquiries */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#DF643B] flex items-center gap-1.5 mb-2">
              <Mail className="w-4 h-4" /> Start A Conversation
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#141413] leading-[0.95] mb-6">
              Let's Build Intelligent Systems.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              Whether you need to architect custom RAG pipelines, autonomous AI agents, multi-step LLM workflows, or robust enterprise automation, I'm always open to discussing new opportunities.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#DF643B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-neutral-900 hover:text-[#DF643B] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 transition-colors flex items-center gap-1"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-bold text-neutral-900 hover:text-teal-700 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <span className="text-xs font-semibold text-neutral-400">
                  India (+91)
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <Github className="w-3.5 h-3.5" /> GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.resumePdfUrl || "/Mohammed_Nihal_VP_Resume.pdf"}
                download="Mohammed_Nihal_VP_Resume.pdf"
                className="px-4 py-2 rounded-full bg-[#DF643B] text-white text-xs font-semibold hover:bg-[#c8532b] transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Download CV (PDF)
              </a>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-full border border-neutral-300 bg-white text-neutral-800 text-xs font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" /> Curriculum Vitae
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-black/10 shadow-sm">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141413] mb-2">
            Send an Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 mb-6">
            Fill out the form below to initiate collaboration or request technical consultation.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center"
            >
              <Check className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h4 className="font-bold text-base mb-1">Thank You! Message Received.</h4>
              <p className="text-xs sm:text-sm text-emerald-700">
                I will review your message and reply promptly to your email.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, timeline, or engineering inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#141413] text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" /> Send Direct Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
