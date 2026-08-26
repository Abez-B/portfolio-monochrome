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
    <div className="glass-card p-6 flex flex-col h-full hover:scale-[1.01] transition-all duration-300">
      <img
        src={project.thumbnail}
        alt={`${project.title} thumbnail`}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-size="22" font-weight="bold">${encodeURIComponent(project.title)}</text></svg>`;
          (e.currentTarget as HTMLImageElement).src = `data:image/svg+xml;utf8,${svg}`;
        }}
        className="w-full h-48 object-cover rounded-md mb-4 grayscale hover:grayscale-0 transition-all duration-500"
      />
      <h3 className="text-black dark:text-white text-xl font-bold mb-2 break-words">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow text-balance">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-black dark:text-white text-md font-semibold mb-2">Technologies:</h4>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <li key={index} className="glass-tag text-xs px-3 py-1 rounded-full">
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
            className="glass-btn flex-1 text-center px-4 py-2 rounded-md text-sm font-medium"
          >
            Live Demo
          </a>
        )}
        {project.githubRepo && (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn flex-1 text-center px-4 py-2 rounded-md text-sm font-medium"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;