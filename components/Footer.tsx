import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.08),_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-10 text-center relative z-10">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://wa.me/918113871435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-nihal-87b952235"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/nihalvp321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nihal VP. Designed & Built by me.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Made with React ⚛️, Tailwind 💨 & Framer Motion 🎞️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
