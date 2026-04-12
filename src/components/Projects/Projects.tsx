import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

import gradeNotifierThumbnail from '../../assets/images/grade-notifier-thumbnail.png';
import hungerblockThumbnail from '../../assets/images/hungerblock-thumbnail.png';
import linuxHealthMonitorThumbnail from '../../assets/images/linux-health-monitor-thumbnail.png';
import aiCodeEvalThumbnail from '../../assets/images/ai-code-eval-thumbnail.png';
import fossgceeThumbnail from '../../assets/images/fossgcee-thumbnail.png';

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
    // Priority #1: Community / Leadership
    {
      title: 'FOSSGCEE — Student FOSS Club',
      description:
        'Founded and lead FOSSGCEE, the Free and Open Source Software club at Government College of Engineering, Erode. Organising workshops, open-source contribution drives, and Linux install fests to build an open-source culture among students. The club has its own dedicated website at fossgcee.vercel.app.',
      technologies: ['Open Source', 'Community Building', 'Linux', 'Git', 'Vercel'],
      thumbnail: fossgceeThumbnail,
      liveDemo: 'https://fossgcee.vercel.app',
      githubRepo: '#',
      category: 'Community',
    },
    // Priority #2: Systems & Infrastructure
    {
      title: 'Smart Linux System Health Monitor',
      description:
        'A native Linux graphical system monitoring application inspired by htop, implemented as a modern Qt-based GUI. Displays real-time CPU per-core usage, RAM consumption, process list, network I/O, and system uptime with live-updating charts — all in a clean, dark dashboard interface.',
      technologies: ['C++', 'Qt6', 'Linux', 'System Monitoring', 'GUI', 'proc filesystem'],
      thumbnail: linuxHealthMonitorThumbnail,
      liveDemo: '#',
      githubRepo: 'https://github.com/Abez-B/Smart_Linux_System_Health_Monitor',
      category: 'Systems',
    },
    {
      title: 'OS & Systems Work',
      description:
        'Hands-on experience with operating systems, including installing Arch Linux & Ubuntu in dual-boot configurations. Familiarity with bootloader and GRUB fixes, and practical knowledge of Linux system optimization techniques.',
      technologies: ['Linux', 'Operating Systems', 'System Optimization', 'Arch Linux', 'Ubuntu'],
      thumbnail: linuxHealthMonitorThumbnail,
      liveDemo: '#',
      githubRepo: '#',
      category: 'Systems',
    },
    // Priority #3: AI / ML
    {
      title: 'AI Code Evaluation (SWE-bench Pro)',
      description:
        'Automated AI-powered SWE-bench Pro solution using GitHub Actions to fix OpenLibrary\'s ISBN import logic. Integrates Claude AI to analyse failing tests, generate patches, and verify fixes. Produces 6 compliant JSONL artifacts — logs, metrics, and patches — with enhanced token tracking and cost analysis.',
      technologies: ['Python', 'Claude AI', 'GitHub Actions', 'SWE-bench', 'JSONL', 'Automated Testing'],
      thumbnail: aiCodeEvalThumbnail,
      liveDemo: '#',
      githubRepo: 'https://github.com/Abez-B/ai-code-evaluation-openlibrary',
      category: 'AI/ML',
    },
    {
      title: 'IMDB Sentiment Analysis',
      description:
        'A machine learning project comparing the performance of Support Vector Machine (SVM) and Backpropagation Neural Network (MLP) models for sentiment analysis on the IMDB dataset. Highlights the strengths and weaknesses of different classification algorithms in NLP tasks.',
      technologies: ['Python', 'Machine Learning', 'SVM', 'Neural Networks', 'Sentiment Analysis'],
      thumbnail: 'https://placehold.co/300x200/111827/ffffff?text=Sentiment+Analysis',
      liveDemo: '#',
      githubRepo: '#',
      category: 'AI/ML',
    },
    {
      title: 'AI/ML Algorithm Implementations',
      description:
        'Implemented multiple fundamental AI and ML algorithms from scratch — search algorithms (DFS, BFS, A*, Dijkstra), clustering (K-means), classification (Gaussian Naive Bayes, SVM), regression (Linear & Multiple), and neural networks using PyTorch and Keras. Also explored probabilistic models with the EM Algorithm (pgmpy).',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'Keras', 'Algorithms'],
      thumbnail: 'https://placehold.co/300x200/111827/ffffff?text=AI%2FML+Implementations',
      liveDemo: '#',
      githubRepo: '#',
      category: 'AI/ML',
    },
    // Priority #4: Desktop Apps
    {
      title: 'Grade Notification System',
      description:
        'A Python desktop app for teachers to efficiently track student grades and communicate with parents. Features dynamic subject customisation (1–9 subjects), colour-coded performance views, and a robust SMS system for sending individual or bulk grade updates via the Twilio API. Built with Tkinter and SQLite for reliability.',
      technologies: ['Python', 'Tkinter', 'SQLite', 'Twilio API', 'Excel Automation'],
      thumbnail: gradeNotifierThumbnail,
      liveDemo: '#',
      githubRepo: 'https://github.com/Abez-B/Grade_Notifier',
      category: 'Desktop Apps',
    },
    {
      title: 'Deepfake AI Exploration',
      description:
        'A Tkinter-based project exploring the integration of Deepfake AI technologies, delving into the practical application and ethical implications of deepfake generation.',
      technologies: ['Python', 'Tkinter', 'Deepfake AI'],
      thumbnail: 'https://placehold.co/300x200/111827/ffffff?text=Deepfake+AI',
      liveDemo: '#',
      githubRepo: '#',
      category: 'AI/ML',
    },
    // Priority #5: Database
    {
      title: 'DBMS Projects',
      description:
        'Designed and implemented various database management system projects, focusing on robust database design with constraints, triggers, stored procedures, and User-Defined Functions (UDFs). Gained experience with XML integration in SQL environments.',
      technologies: ['SQL', 'DBMS', 'Database Design', 'Triggers', 'Stored Procedures', 'XML'],
      thumbnail: 'https://placehold.co/300x200/111827/ffffff?text=DBMS+Projects',
      liveDemo: '#',
      githubRepo: '#',
      category: 'Database',
    },
    // Priority #6: Blockchain
    {
      title: 'HungerBlock',
      description:
        'A decentralised application (DApp) built on the Ethereum blockchain that aims to reduce food waste and combat hunger. Connects restaurants, event organisers, and individuals with surplus food to local charities. Smart contracts ensure transparent, secure, and efficient food distribution with a verifiable chain of custody from donor to recipient.',
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

  const categories = ['All', 'Community', 'Systems', 'AI/ML', 'Desktop Apps', 'Database', 'Blockchain'];

  return (
    <section id="projects" className="bg-white text-black dark:bg-black dark:text-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
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
