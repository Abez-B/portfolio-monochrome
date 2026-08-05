import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useCMS } from '../../cms/CMSContext';
import { Project } from '../../cms/types';

const Projects: React.FC = () => {
  const { cmsData } = useCMS();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = cmsData.projects;

  const filteredProjects = projects.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Derive categories from projects dynamically
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="projects" className="text-black dark:text-white py-6 md:py-8 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">My Projects</h2>
        <div className="flex justify-center mb-6 sm:mb-8 flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id || index} onClick={() => openModal(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject as any} onClose={closeModal} />
    </section>
  );
};

export default Projects;
