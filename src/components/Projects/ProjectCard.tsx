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
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-up">
      <img
        src={project.thumbnail}
        alt={`${project.title} thumbnail`}
        className="w-full h-48 object-cover rounded-md mb-4 grayscale hover:grayscale-0 transition-all duration-500"
      />
      <h3 className="text-black dark:text-white text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-black dark:text-white text-md font-semibold mb-2">Technologies:</h4>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-auto pt-4 gap-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-black dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
          >
            Live Demo
          </a>
        )}
        {project.githubRepo && (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-black dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;