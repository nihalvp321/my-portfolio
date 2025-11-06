import React from "react";
import { motion } from "framer-motion";

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.span
    whileHover={{ scale: 1.08, y: -2 }}
    className="bg-gray-800/60 text-cyan-300 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full border border-gray-700/80 hover:border-cyan-400/70 shadow-[0_0_10px_rgba(0,255,255,0.15)] hover:shadow-[0_0_18px_rgba(0,255,255,0.25)] transition-all duration-300"
  >
    {children}
  </motion.span>
);

const About: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "Python",
    "Django",
    "Node.js",
    "Tailwind CSS",
    "Supabase",
    "n8n Automation",
    "AI Agents",
    "LangChain",
    "RAG",
    "OpenAI API",
    "Machine Learning (Scikit-learn)",
    "LLM Fine-Tuning",
    "MCP (Model Context Protocol)",
    "Vector Databases",
    "REST APIs",
    "SQL / NoSQL",
    "Git & CI/CD",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.1),_transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white mb-4 tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-12 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)] origin-left"
        ></motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden border border-gray-700/60 hover:border-cyan-400/70 shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-500"
            >
              <img
                src="WhatsApp Image 2025-10-30 at 10.20.40_3ea90001.jpg"
                alt="About me"
                className="rounded-2xl object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3 text-lg text-gray-300 leading-relaxed"
          >
            <p className="mb-4">
              I’m a{" "}
              <span className="text-cyan-400 font-semibold">
                Python Full Stack Engineer
              </span>{" "}
              who builds intelligent, automated, and scalable web apps using{" "}
              <span className="text-cyan-400 font-semibold">Django</span>,{" "}
              <span className="text-cyan-400 font-semibold">React</span>, and{" "}
              <span className="text-cyan-400 font-semibold">Supabase</span>.  
              I specialize in developing seamless user experiences powered by{" "}
              <span className="text-cyan-400 font-semibold">AI agents</span>,{" "}
              <span className="text-cyan-400 font-semibold">n8n workflows</span>, and{" "}
              <span className="text-cyan-400 font-semibold">LangChain + RAG pipelines</span>.
            </p>

            <p className="mb-6">
              My focus is blending{" "}
              <span className="text-cyan-400 font-semibold">AI automation</span> and{" "}
              <span className="text-cyan-400 font-semibold">full-stack development</span> — 
              turning modern web interfaces into smart, self-evolving systems that match the{" "}
              <span className="text-cyan-400 font-semibold">Lovable</span> coding vibe — 
              clean, efficient, and intelligent.
            </p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap mt-6"
            >
              {skills.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
