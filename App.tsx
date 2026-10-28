import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import BioModal from './components/BioModal';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';
import { Project, CertificationItem } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#DF643B] text-[#141413] p-2 sm:p-4 md:p-8 lg:p-12 transition-colors duration-500 font-sans">
      {/* Outer Editorial Canvas Frame */}
      <div className="w-full max-w-[1400px] mx-auto bg-[#FAF9F6] rounded-[22px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-black/10 overflow-hidden px-3.5 sm:px-8 md:px-12 py-3.5 sm:py-6">
        
        {/* Top Minimal Navigation Bar */}
        <Header onOpenResume={() => setResumeModalOpen(true)} />

        {/* Hero Section matching Screenshot 1 (Editorial Title + About Card + Index Carousel with Dots) */}
        <Hero
          onOpenProjectModal={(project) => setSelectedProject(project)}
          onOpenBioModal={() => setBioModalOpen(true)}
        />

        {/* Professional Experience Section (Mite Technology Pillars) */}
        <Experience />

        {/* Full Featured Projects Section with Filtering */}
        <Projects onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Education Credentials & Industry Certifications */}
        <Education onOpenCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Contact & Inquiries */}
        <Contact onOpenResume={() => setResumeModalOpen(true)} />

        {/* Editorial Footer */}
        <Footer onOpenResume={() => setResumeModalOpen(true)} />
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certification={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <BioModal
        isOpen={bioModalOpen}
        onClose={() => setBioModalOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
