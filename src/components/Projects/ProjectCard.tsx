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
    <div className="glass-card p-5 sm:p-6 flex flex-col h-full hover:scale-[1.015] hover:shadow-2xl transition-all duration-300 cursor-pointer group">
      <img
        src={project.thumbnail}
        alt={`${project.title} thumbnail`}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-size="22" font-weight="bold">${encodeURIComponent(project.title)}</text></svg>`;
          (e.currentTarget as HTMLImageElement).src = `data:image/svg+xml;utf8,${svg}`;
        }}
        className="w-full h-48 object-cover rounded-xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 border border-black/5 dark:border-white/10 shadow-sm"
      />
      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mb-1 block">
        {project.category}
      </span>
      <h3 className="text-black dark:text-white text-lg sm:text-xl font-bold mb-2 break-words font-display tracking-tight group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-4 flex-grow text-balance leading-relaxed">
        {project.description}
      </p>
      <div className="mb-5">
        <h4 className="text-[10px] font-mono uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-2">
          Tech Stack
        </h4>
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, index) => (
            <li key={index} className="glass-tag text-[11px] font-mono px-2.5 py-1 rounded-lg">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-auto pt-2 gap-3">
        {project.liveDemo && project.liveDemo !== '#' && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="glass-btn flex-1 text-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide hover:scale-[1.02] shadow-sm"
          >
            Live Demo ↗
          </a>
        )}
        {project.githubRepo && project.githubRepo !== '#' && (
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="glass-btn flex-1 text-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide hover:scale-[1.02] shadow-sm"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;