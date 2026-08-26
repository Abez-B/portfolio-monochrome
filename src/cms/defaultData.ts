import { CMSData } from './types';
import linuxHealthMonitorThumbnail from '../assets/images/linux-health-monitor-thumbnail.png';
import fossgceeThumbnail from '../assets/images/fossgcee-thumbnail.png';

export const defaultCMSData: CMSData = {
  hero: {
    name: 'Bharath Kumar P',
    title: 'Final Year IT Student | Systems & Network Engineer',
    subtitle: 'Systems & Network Engineer | Full-Stack Developer — Linux, KVM/QEMU, Docker, CI/CD & Open Source.',
    ctaText: 'Explore My Work',
    ctaTarget: 'projects',
    resumeUrl: 'https://drive.google.com/file/d/1MwlG95bm4T963YPAS6rVrX8gYdeTDHah/view?usp=sharing',
  },
  about: {
    bio1: "Final-year B.Tech Information Technology student at Government College of Engineering, Erode (Anna University) with 7.67 CGPA. Core coursework in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and OOP. I build real projects from scratch, ship across the full stack, and learn directly from documentation and code review.",
    bio2: "Hands-on Linux systems administrator with experience across 5+ distros. Skilled in network infrastructure, KVM/QEMU/libvirt virtualization, Docker containerization, and CI/CD pipelines with GitHub Actions. Proficient in JavaScript (ES6+), TypeScript, Python, C, SQL, and Solidity. Web stack includes React.js, Next.js, Node.js, Express.js, GraphQL, REST APIs, JWT, and OAuth 2.0. I debug from documentation, not AI.",
    fossgceeTitle: "🐧 Founder & Lead — FOSS Club, GCE Erode",
    fossgceeDescription: "Built and led open-source developer community from scratch; ran workshops on Linux, Git, KVM virtualization, and web dev — entirely self-taught and peer-driven, no live instruction. Deployed club infrastructure with Docker, Nginx reverse proxy, and GitHub Actions CI/CD on a cloud VM; actively learning open source contribution practices.",
    fossgceeLink: "https://fossgcee.vercel.app",
    systemsFocusTitle: "Systems & Networking Focus",
    systemsFocusDescription: "KVM/QEMU/libvirt virtualization, Docker, Nginx, Bash, GitHub Actions CI/CD, AWS EC2/S3, Zabbix monitoring, Linux system administration (5+ distros), and network infrastructure — built and debugged from scratch.",
    goal: "Build secure, scalable systems infrastructure and contribute to impactful open-source Linux software — the self-directed, craft-first mindset that drives strong engineering teams."
  },
  skillCategories: [
    {
      id: "cat-1",
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "C" },
        { name: "SQL" },
        { name: "Solidity" },
        { name: "HTML5/CSS3" }
      ]
    },
    {
      id: "cat-2",
      title: "Web Technologies",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "GraphQL" },
        { name: "REST APIs" },
        { name: "JWT & OAuth 2.0" },
        { name: "Webhooks" }
      ]
    },
    {
      id: "cat-3",
      title: "Systems & DevOps",
      skills: [
        { name: "Linux (5+ Distros)" },
        { name: "KVM / QEMU / libvirt" },
        { name: "Docker" },
        { name: "GitHub Actions (CI/CD)" },
        { name: "Bash Scripting" },
        { name: "Nginx" },
        { name: "AWS EC2 / S3" },
        { name: "Zabbix Monitoring" }
      ]
    },
    {
      id: "cat-4",
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Git & GitHub" },
        { name: "Qt6 / CMake" },
        { name: "Postman" },
        { name: "Jest" },
        { name: "VS Code" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: 'Thirukkural Daily Widget',
      description: 'Developed a cross-platform open-source Thirukkural widget supporting Android, Linux (Wayland/X11), and Windows. Delivers one of 1330 Kurals daily with zero cloud dependencies, offline-first architecture, custom themes, and battery-efficient operation.',
      technologies: ['Flutter', 'Android Widgets', 'Linux (Eww)', 'Rainmeter', 'Dart'],
      thumbnail: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-size="24" font-weight="bold">Thirukkural Widget</text></svg>`,
      liveDemo: 'https://f-droid.org/en/packages/com.abezb.thirukuraldaily/',
      githubRepo: 'https://github.com/Abez-B/thirukkural-daily-widget-',
      category: 'Open Source',
    },
    {
      id: "proj-2",
      title: 'Tamil Technical Lexicon OCR Pipeline',
      description: 'Built a resumable OCR pipeline to process 14 scanned Tamil technical dictionaries (~5,600 pages) into structured English↔Tamil terminology datasets. Implemented row-based bilingual term extraction with GPU acceleration and JSONL output for downstream NLP.',
      technologies: ['Python', 'OCR', 'PyMuPDF', 'PyTorch', 'JSONL', 'NLP'],
      thumbnail: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-size="24" font-weight="bold">OCR Pipeline</text></svg>`,
      liveDemo: '#',
      githubRepo: 'https://codeberg.org/Abhrams/kalaichol_ai_assistant',
      category: 'AI/ML',
    },
    {
      id: "proj-3",
      title: 'Ezhuthurukal — Tamil Font Discovery Platform',
      description: 'Built a community-driven platform for discovering, previewing, and downloading Tamil fonts with real-time rendering and searchable metadata. Designed a scalable font indexing architecture for educational and research use.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      thumbnail: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-family="sans-serif" font-size="24" font-weight="bold">Ezhuthurukal</text></svg>`,
      liveDemo: 'https://ezhuthurukal.pages.dev/',
      githubRepo: 'https://github.com/Abez-B/Ezhuthurukal',
      category: 'Web',
    },
    {
      id: "proj-4",
      title: 'Smart Linux System Health Monitor',
      description: 'Built a graphical Linux system monitor with Qt6/C++ featuring real-time resource visualization (per-core CPU, RAM, processes, network I/O) and KDE Connect integration for remote monitoring and command execution.',
      technologies: ['C++', 'Qt6', 'CMake', 'KDE Connect', 'Linux', 'procfs'],
      thumbnail: linuxHealthMonitorThumbnail,
      liveDemo: '#',
      githubRepo: 'https://github.com/Abez-B/Smart_Linux_System_Health_Monitor',
      category: 'Systems',
    },
    {
      id: "proj-5",
      title: 'FOSS GCEE Website',
      description: 'Developed the official website for the Free and Open Source Software Club at Government College of Engineering, Erode, showcasing events, resources, and community initiatives with dynamic content and production deployment.',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'GSAP', 'Docker', 'Nginx'],
      thumbnail: fossgceeThumbnail,
      liveDemo: 'https://fossgcee.vercel.app',
      githubRepo: 'https://github.com/fossgcee/foss-gcee-site',
      category: 'Community',
    }
  ],
  experience: [
    {
      id: "exp-1",
      date: '2024 - Present',
      title: 'Founder & Lead — FOSS Club',
      company: 'Government College of Engineering, Erode (fossgcee.vercel.app)',
      description: 'Built and led open-source developer community from scratch; ran workshops on Linux, Git, KVM virtualization, and web dev — entirely self-taught and peer-driven, no live instruction. Deployed club website with Docker, Nginx, and GitHub Actions CI/CD on a cloud VM; actively learning open source contribution practices.'
    },
    {
      id: "exp-2",
      date: '2022 - Present',
      title: 'Full-Stack Development & Competitive Programming',
      company: 'Independent Projects & Open Community',
      description: 'Completed 15+ MERN stack projects; proficient Git workflows; won KDSH Quiz.'
    }
  ],
  education: [
    {
      id: "edu-1",
      date: '2023 - 2027',
      title: 'Bachelor of Technology in Information Technology (Final Year)',
      institution: 'Government College of Engineering, Erode (Anna University)',
      description: 'CGPA: 7.67 (Till Date). Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming.'
    }
  ],
  contact: {
    email: 'bharathjp02@gmail.com',
    discordHandle: '.abhrams',
    discordUrl: 'https://discord.com/users/850035433030680576',
    whatsappNumber: '916379478168',
    whatsappDisplay: '+91 6379478168',
    linkedinUrl: 'https://www.linkedin.com/in/bharath-kumarjp02/',
    linkedinHandle: 'bharath-kumarjp02',
    customContacts: [
      {
        id: 'contact-mastodon',
        title: 'Mastodon',
        value: '@abhrams@mastodon.social',
        url: 'https://mastodon.social/@abhrams'
      },
      {
        id: 'contact-matrix',
        title: 'Matrix',
        value: '@bharathjp02:matrix.org',
        url: 'https://matrix.to/#/@bharathjp02:matrix.org'
      },
      {
        id: 'contact-instagram',
        title: 'Instagram',
        value: '@abhramzb',
        url: 'https://www.instagram.com/abhramzb'
      },
      {
        id: 'contact-telegram',
        title: 'Telegram',
        value: '@bharathjp02',
        url: 'https://t.me/bharathjp02'
      }
    ]
  },
  footer: {
    ownerName: 'Bharath Kumar P',
    socialLinks: [
      { label: 'GitHub', url: 'https://github.com/Abez-B' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bharath-kumarjp02/' },
      { label: 'Website', url: 'https://bharath.is-cool.dev' },
      { label: 'Mastodon', url: 'https://mastodon.social/@abhrams' },
      { label: 'Matrix', url: 'https://matrix.to/#/@bharathjp02:matrix.org' },
      { label: 'Instagram', url: 'https://www.instagram.com/abhramzb' },
      { label: 'Telegram', url: 'https://t.me/bharathjp02' }
    ]
  },
  meta: {
    siteTitle: 'Bharath Kumar P | Final Year IT Student & Systems Engineer',
    metaDescription: 'Portfolio of Bharath Kumar P, Final Year IT student specializing in Linux Systems, KVM Virtualization, DevOps, and Open Source Software.',
    keywords: 'Bharath Kumar, Portfolio, Resume, Linux, KVM, Systems Engineer, Open Source, GCE Erode, FOSS, React, Python, C++'
  },
  navLinks: [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ]
};
