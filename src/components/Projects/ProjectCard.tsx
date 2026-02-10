import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  liveDemo: string;
  githubRepo: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 rounded-lg p-6 flex flex-col h-full backdrop-blur-md bg-opacity-70 dark:bg-opacity-70" data-aos="fade-up">
      <img
        src={project.thumbnail}
        alt={`${project.title} thumbnail`}
        className="w-full h-48 object-cover rounded-md mb-4 grayscale"
      />
      <h3 className="text-white dark:text-black text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-white dark:text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-white dark:text-black text-md font-semibold mb-2">Technologies:</h4>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <li key={index} className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-800 text-xs px-3 py-1 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-auto">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-gray-700 border border-gray-700 dark:border-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-sm"
          >
            Live Demo
          </a>
        )}
        {project.githubRepo && (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white dark:text-gray-700 border border-gray-700 dark:border-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 text-sm"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;