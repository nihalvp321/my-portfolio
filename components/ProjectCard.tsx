import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string; // Optional live demo link
  tags: string[];
  // Added a prop to potentially style based on the parent's hover state
  isParentHovered?: boolean; 
}

// ... (GithubIcon and ExternalLinkIcon remain the same) ...
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  tags,
  isParentHovered, // Destructure the new prop
}) => {
  return (
    <motion.div
      // Entrance animation similar to About text motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      // Lift and add a subtle glow on hover
      whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 255, 255, 0.4)" }} // Increased lift and glow for better highlight
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      // Set a Fixed Overall Card Height for perfect carousel alignment
      className="group flex-shrink-0 w-full h-[35rem] bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300"
    >
      {/* Image Section - Fixed height 48 */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          // Keep the image zoom on card hover
          whileHover={{ scale: 1.1 }} 
        />
        {/* Darker gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Content Section - Uses flex-col to push the link section down */}
      <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          {/* Title - Enforced line-clamp-2 for consistent height */}
          <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2 leading-tight line-clamp-2">
            {title}
          </h3>

          {/* Tags - Used a MINIMUM height (h-8) and controlled overflow to stop wrapping from breaking alignment */}
          <div className="flex flex-wrap gap-2 mb-4 h-8 overflow-hidden">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 bg-cyan-800/30 border border-cyan-700/50 rounded-lg text-cyan-200 transition duration-300 hover:bg-cyan-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description - Allowing full line height within the remaining space. */}
          <p className="text-gray-300 text-sm line-clamp-5">{description}</p>
        </div>

        {/* Links - Always pushed to the bottom due to 'mt-auto' */}
        <div className="flex space-x-3 mt-auto pt-3 border-t border-gray-700/50">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-700/50 text-cyan-300 rounded-full font-bold text-sm transition duration-300 hover:bg-cyan-600 hover:text-white shadow-md hover:shadow-cyan-500/50"
          >
            <GithubIcon /> 
            Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-700/50 text-purple-300 rounded-full font-bold text-sm transition duration-300 hover:bg-purple-600 hover:text-white shadow-md hover:shadow-purple-500/50"
            >
              <ExternalLinkIcon /> 
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;