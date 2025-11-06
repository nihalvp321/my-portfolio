import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "EKARBOT-Real Estate Chatbot System",
    description:
      "EKARBOT is an AI-powered real estate chatbot built with n8n, TypeScript, and Supabase. It uses OpenAI LLMs with RAG on real CRM and Bayut property data to deliver smart, real-time insights.",
    imageUrl: "db9ea94680921ded14b21264e7226a60.jpg",
    githubUrl: "#",
    tags: ["Typescript", "n8n", "Supabase", "Openai API"],
  },
  {
    title: "Dmythra-Diff-abled People Helping System",
    description:
      "A web platform built with Flask that connects differently-abled individuals with resources, services, and community support.",
    imageUrl: "pexels-judita-tamošiūnaitė-20267641.jpg",
    githubUrl: "https://github.com/nihalvp321/DMYTHRA.git",
    tags: ["Python-Flask", "HTML,CSS,JAVASCRIPT", "Sqlite"],
  },
  {
    title: "HeartGuard-Heart Disease Prediction System",
    description:
      "A machine learning-based Flask app that predicts the risk of heart disease using user health data and displays results interactively.",
    imageUrl: "9a53d114d3c9b4f1b3d5963463f1b559.jpg",
    githubUrl: "https://github.com/nihalvp321/HeartGuard.git",
    tags: ["Scikit-Learn", "Python-Flask", "Sqlite"],
  },
  {
    title: "Routescape-KSRTC Bus and Room Booking System",
    description:
      "An integrated booking system for KSRTC buses and accommodations, offering real-time availability and seamless reservations.",
    imageUrl: "8c17e43d76a82097122f32d09ee9e219.jpg",
    githubUrl: "https://github.com/nihalvp321/Routscape.git",
    tags: ["Python-Flask", "HTML,CSS,JAVASCRIPT", "Sqlite"],
  },
];

const Projects: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the common transition properties
  const commonTransition = {
    repeatType: "loop" as const, // Framer Motion needs this cast
    duration: 25,
    ease: "linear" as const,
  };

  // Define the transition based on the hover state
  const carouselTransition = {
    x: {
      ...commonTransition,
      // Key change: Repeat is set to 0 (no repeat) when hovered, otherwise Infinity.
      repeat: isHovered ? 0 : Infinity, 
      // If repeat is 0, we need to ensure the animation value is what we want (it will be its current position).
    },
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle radial gradient/light behind content for atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-4 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Showcase
          </span>
          <span className="text-white"> Projects</span>
        </motion.h2>
        {/* Enhanced Divider with About-like motion */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] origin-left"
        />

        {/* Auto-Scrolling Carousel with Mask */}
        <div className="relative overflow-hidden">
          {/* Fading Mask Left to hide the start/end point */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent z-20 pointer-events-none"></div>
          {/* Fading Mask Right to hide the start/end point */}
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent z-20 pointer-events-none"></div>

          {/* New: The outer div handles the hover state for the entire carousel row */}
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex space-x-8 w-max"
              // The animate prop defines the motion
              animate={{ x: ["0%", "-50%"] }} 
              // The transition prop controls the duration and, importantly, the repeat count (Infinity or 0).
              transition={carouselTransition}
            >
              {/* Duplicate the cards to create infinite scroll illusion */}
              {[...projectsData, ...projectsData].map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[20rem]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % projectsData.length) * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;