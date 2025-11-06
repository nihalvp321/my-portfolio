import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden relative"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.08),_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-20 text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* === TEXT SECTION === */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
            >
              Hi, I'm <span className="text-cyan-400">Nihal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl text-cyan-400 mb-6 font-semibold"
            >
              AI-Powered Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              I build intelligent web applications using{" "}
              <span className="text-cyan-400 font-medium">Python</span>,{" "}
              <span className="text-cyan-400 font-medium">React</span>, and{" "}
              <span className="text-cyan-400 font-medium">AI automation</span> — 
              merging automation and design into seamless, next-gen experiences.
            </motion.p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full 
                         hover:bg-cyan-600 transition duration-300 inline-block 
                         shadow-lg hover:shadow-cyan-500/50"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* === IMAGE SECTION === */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-1/3 mt-10 md:mt-0 relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-[3px] border-cyan-500 shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-transform duration-700 group-hover:scale-[1.06]">
              
              {/* Image layer with grayscale to color transition */}
              <img
                src="WhatsApp Image 2025-10-30 at 10.20.40_3ea90001.jpg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-full 
                           grayscale brightness-[70%] contrast-[90%] 
                           transition-all duration-[1.8s] ease-[cubic-bezier(0.4,0,0.2,1)]
                           group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 
                           group-hover:scale-105"
              />

              {/* Soft gradient overlay for left-to-right reveal */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent
                           opacity-60 group-hover:opacity-0 transition-opacity duration-[1.5s] ease-in-out"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
