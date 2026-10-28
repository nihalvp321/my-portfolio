import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, FileText, Github, Linkedin, Mail, Phone, Download, Menu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "INDEX", href: "#index" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Allow drawer exit animation or scroll smoothly
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  return (
    <>
      {/* Top Header inside canvas frame */}
      <header className="w-full flex items-center justify-between py-4 sm:py-6 border-b border-black/5">
        {/* Brand / Name Logo on Mobile & Desktop */}
        <a
          href="#about"
          onClick={(e) => handleSmoothScroll(e, '#about')}
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#141413] group-hover:text-[#DF643B] transition-colors">
            M. NIHAL <span className="font-editorial text-xs sm:text-sm font-light text-neutral-400">VP</span>
          </span>
        </a>

        {/* Desktop Nav items (Hidden on mobile to eliminate horizontal overflow) */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#161616]/75 hover:text-[#DF643B] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Resume actions and mobile hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href={PERSONAL_INFO.resumePdfUrl || "/Mohammed_Nihal_VP_Resume.pdf"}
            download="Mohammed_Nihal_VP_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DF643B] text-[11px] font-bold uppercase tracking-wider text-white hover:bg-[#c9532d] transition-all shadow-sm"
            title="Direct Download CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" /> Download CV
          </a>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/15 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </button>

          {/* Quick mobile CV download icon button */}
          <a
            href={PERSONAL_INFO.resumePdfUrl || "/Mohammed_Nihal_VP_Resume.pdf"}
            download="Mohammed_Nihal_VP_Resume.pdf"
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#DF643B] text-white shadow-sm active:scale-95 transition-transform"
            aria-label="Download CV"
            title="Download CV"
          >
            <Download className="w-4 h-4" />
          </a>

          {/* Minimalist 3-line menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="group flex flex-col justify-center items-end w-9 h-9 space-y-1.5 p-1 rounded-lg hover:bg-black/5 active:scale-95 transition-all focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="w-6 h-[2px] bg-[#141413] transition-all group-hover:w-7"></span>
            <span className="w-4 h-[2px] bg-[#141413] transition-all group-hover:w-7"></span>
            <span className="w-6 h-[2px] bg-[#141413] transition-all group-hover:w-7"></span>
          </button>
        </div>
      </header>

      {/* Slide-out Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm bg-[#FAF9F6] h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10 border-l border-black/10"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-black/10">
                  <div>
                    <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 block">
                      MOHAMMED NIHAL
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DF643B] font-bold">
                      AI Engineer & Architect
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center transition-colors text-neutral-800"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="mt-6 space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                    Navigation
                  </span>
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link, idx) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-xl sm:text-2xl font-editorial font-semibold text-neutral-900 hover:text-[#DF643B] transition-colors flex items-center justify-between group py-1"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                        <span className="text-xs font-mono text-neutral-400 group-hover:text-[#DF643B]">
                          0{idx + 1}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Direct Contact info */}
                <div className="mt-8 pt-5 border-t border-black/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                    Direct Contact
                  </span>
                  <div className="mt-2.5 space-y-2 text-xs sm:text-sm text-neutral-700">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#DF643B]" /> {PERSONAL_INFO.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#DF643B]" /> {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-black/10 space-y-2.5 mt-6">
                <a
                  href={PERSONAL_INFO.resumePdfUrl || "/Mohammed_Nihal_VP_Resume.pdf"}
                  download="Mohammed_Nihal_VP_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#DF643B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#c9532d] transition-all shadow-md active:scale-95"
                >
                  <Download className="w-4 h-4" /> Download CV (PDF)
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-neutral-900 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" /> View Full Curriculum Vitae
                </button>

                <div className="flex gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
