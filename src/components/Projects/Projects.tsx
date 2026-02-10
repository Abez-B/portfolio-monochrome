import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

import gradeNotifierThumbnail from '../../assets/images/grade-notifier-thumbnail.png';
import hungerblockThumbnail from '../../assets/images/hungerblock-thumbnail.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  liveDemo: string;
  githubRepo: string;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // Priority #1: Systems & Infrastructure
    {
      title: 'OS & Systems Work',
      description:
        'Hands-on experience with operating systems, including installing Arch Linux & Ubuntu in dual-boot configurations. Familiarity with bootloader and GRUB fixes, and practical knowledge of Linux system optimization techniques.',
      technologies: ['Linux', 'Operating Systems', 'System Optimization', 'Arch Linux', 'Ubuntu'],
      thumbnail: 'https://via.placeholder.com/300x200?text=OS+Systems',
      liveDemo: '#',
      githubRepo: '#',
      category: 'Systems',
    },
    {
      title: 'Grade Notification System',
      description:
        'A Tkinter-based desktop application designed to bridge the communication gap between educational institutions and parents. It features login validation, teacher input, automatic Excel sheet updates for marks, and sends detailed SMS notifications to parents via Twilio API, including personalized professor details. The application boasts custom sunflower-themed visuals (backgrounds, buttons, assets) and a refresh button for new student input.',
      technologies: ['Python', 'Tkinter', 'Twilio API', 'Web Scraping (Beautiful Soup)', 'Excel Automation'],
      thumbnail: gradeNotifierThumbnail,
      liveDemo: '#',
      githubRepo: '#',
      category: 'Desktop Apps',
    },
    {
      title: 'DBMS Projects',
      description:
        'Designed and implemented various database management system projects, focusing on robust database design with constraints, triggers, stored procedures, and User-Defined Functions (UDFs). Gained experience with XML integration in SQL environments.',
      technologies: ['SQL', 'DBMS', 'Database Design', 'Triggers', 'Stored Procedures', 'XML'],
      thumbnail: 'https://via.placeholder.com/300x200?text=DBMS+Projects',
      liveDemo: '#',
      githubRepo: '#',
      category: 'Database',
    },
    {
      title: 'IMDB Sentiment Analysis',
      description:
        'A machine learning project comparing the performance of Support Vector Machine (SVM) and Backpropagation Neural Network (MLP) models for sentiment analysis on the IMDB dataset. This project highlights the strengths and weaknesses of different classification algorithms in natural language processing tasks.',
      technologies: ['Python', 'Machine Learning', 'SVM', 'Neural Networks', 'Sentiment Analysis'],
      thumbnail: 'https://via.placeholder.com/300x200?text=Sentiment+Analysis',
      liveDemo: '#',
      githubRepo: '#',
      category: 'AI/ML',
    },
    {
      title: 'AI/ML Algorithm Implementations',
      description:
        'Implemented multiple fundamental Artificial Intelligence and Machine Learning algorithms from scratch. This includes search algorithms (DFS, BFS, A*, Dijkstra), clustering (K-means), classification (Gaussian Naive Bayes, SVM), regression (Linear & Multiple Regression), and neural networks using PyTorch and Keras. Also explored probabilistic models with the EM Algorithm (pgmpy).',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'Keras', 'Algorithms'],
      thumbnail: 'https://via.placeholder.com/300x200?text=AI/ML+Implementations',
      liveDemo: '#',
      githubRepo: '#',
      category: 'AI/ML',
    },
    {
      title: 'Deepfake AI Exploration',
      description:
        'A Tkinter-based project exploring the integration of Deepfake AI technologies. This project delves into the practical application and implications of deepfake generation.',
      technologies: ['Python', 'Tkinter', 'Deepfake AI'],
      thumbnail: 'https://via.placeholder.com/300x200?text=Deepfake+AI',
      liveDemo: '#',
      githubRepo: '#',
      category: 'AI/ML',
    },
    {
      title: 'HungerBlock',
      description:
        'A decentralized application (DApp) built on the Ethereum blockchain that aims to reduce food waste and combat hunger. HungerBlock connects restaurants, event organizers, and individuals with surplus food to local charities and food banks. Using smart contracts, the platform ensures transparent, secure, and efficient food distribution, creating a verifiable chain of custody from donor to recipient.',
      technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'React', 'Web3.js', 'Tailwind CSS'],
      thumbnail: hungerblockThumbnail,
      liveDemo: '#',
      githubRepo: '#',
      category: 'Blockchain',
    },
  ];

  const filteredProjects = projects.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-black text-white dark:bg-white dark:text-black py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
          <button onClick={() => setFilter('All')} className={`text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 ${filter === 'All' ? 'border-b-2 border-gray-400 dark:border-gray-900' : ''}`}>All</button>
          <button onClick={() => setFilter('Systems')} className={`text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 ${filter === 'Systems' ? 'border-b-2 border-gray-400 dark:border-gray-900' : ''}`}>Systems</button>
          <button onClick={() => setFilter('Database')} className={`text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 ${filter === 'Database' ? 'border-b-2 border-gray-400 dark:border-gray-900' : ''}`}>Database</button>
          <button onClick={() => setFilter('AI/ML')} className={`text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 ${filter === 'AI/ML' ? 'border-b-2 border-gray-400 dark:border-gray-900' : ''}`}>AI/ML</button>
          <button onClick={() => setFilter('Desktop Apps')} className={`text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 ${filter === 'Desktop Apps' ? 'border-b-2 border-gray-400 dark:border-gray-900' : ''}`}>Desktop Apps</button>
          <button onClick={() => setFilter('Blockchain')} className={`text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 ${filter === 'Blockchain' ? 'border-b-2 border-gray-400 dark:border-gray-900' : ''}`}>Blockchain</button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} onClick={() => openModal(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;



