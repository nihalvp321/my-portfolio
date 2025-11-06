import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // modern icons

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-4 py-2 relative group text-gray-300 hover:text-white font-medium transition-colors duration-300"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-extrabold text-white relative group hover:scale-105 transition-transform duration-300"
        >
          <span className="relative z-10">Mohammed Nihal</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#home" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 shadow-lg">
          <nav className="container mx-auto px-6 py-5 flex flex-col space-y-4">
            <NavLink href="#home" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink href="#projects" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
            >
              Let’s Connect
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
