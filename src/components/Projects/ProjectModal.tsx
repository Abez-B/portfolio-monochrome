import React from 'react';
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
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white rounded-lg p-8 max-w-2xl w-full shadow-2xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <img src={project.thumbnail} alt={project.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-lg mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2">Technologies:</h4>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between gap-4">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-md hover:opacity-90 transition-opacity text-sm font-bold">Live Demo</a>
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-gray-300 dark:border-gray-700 text-black dark:text-white px-6 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-bold">GitHub</a>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;