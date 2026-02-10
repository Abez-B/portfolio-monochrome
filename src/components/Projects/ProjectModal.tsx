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
            className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-lg p-8 max-w-2xl w-full backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
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
                  <li key={index} className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-800 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-700 border border-gray-700 dark:border-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">Live Demo</a>
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-700 border border-gray-700 dark:border-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">GitHub Repo</a>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-white dark:text-black">Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;