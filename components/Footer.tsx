import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-10 pb-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
      <div>
        <p className="font-bold text-neutral-800 uppercase tracking-wider text-[11px]">
          {PERSONAL_INFO.name} — AI ENGINEER
        </p>
        <p className="text-[11px] text-neutral-500 mt-0.5">
          Specializing in Generative AI, RAG Systems & Autonomous Agents.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition-colors"
        >
          LinkedIn
        </a>
        <span>•</span>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition-colors"
        >
          GitHub
        </a>
        <span>•</span>
        <button
          onClick={onOpenResume}
          className="hover:text-black transition-colors"
        >
          Resume
        </button>
        <span>•</span>
        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center transition-colors text-neutral-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
