import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  liveDemo: string;
  githubRepo: string;
  category: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll while modal is open to keep focus dead-centered
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl cursor-pointer overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto cursor-default glass-card p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-white/15 bg-white/90 dark:bg-black/90 backdrop-blur-3xl text-black dark:text-white"
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full glass-btn text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all z-20 shadow-md"
              aria-label="Close project modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1.5 block">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 pr-10">
              {project.title}
            </h2>

            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 sm:h-72 object-cover rounded-xl border border-white/15 mb-5 shadow-lg"
              />
            )}

            <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6 font-normal">
              {project.description}
            </p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-gray-500 dark:text-gray-400 mb-2.5">
                  Technologies Used:
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="glass-tag text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap sm:flex-nowrap justify-between gap-3 pt-2">
              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 text-center py-2.5 px-4 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] shadow-md"
                >
                  Live Demo →
                </a>
              )}
              {project.githubRepo && project.githubRepo !== '#' && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn flex-1 text-center py-2.5 px-4 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] shadow-md"
                >
                  GitHub Repository ↗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;