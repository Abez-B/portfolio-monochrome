import React from 'react';
import { FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaLinux, FaJava, FaPython, FaNetworkWired, FaServer, FaTerminal } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillIconProps {
  children: React.ReactNode;
}

const SkillIcon: React.FC<SkillIconProps> = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full p-2">
    {children}
  </div>
);

const Skills: React.FC = () => {
  // Priority #1: Systems & Administration
  const systemsSkills: Skill[] = [
    { name: 'Linux (Arch, Ubuntu)', icon: <FaLinux className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Shell Scripting (Bash)', icon: <FaTerminal className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'System Optimization', icon: <FaServer className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Server Administration', icon: <FaServer className="w-8 h-8 text-black dark:text-white" /> },
  ];

  // Priority #2: Networking & Monitoring
  const networkingSkills: Skill[] = [
    { name: 'Zabbix', icon: <FaNetworkWired className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Network Monitoring', icon: <FaNetworkWired className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Network Security', icon: <FaNetworkWired className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'TCP/IP, DNS, DHCP', icon: <FaNetworkWired className="w-8 h-8 text-black dark:text-white" /> },
  ];

  // Priority #3: Backend & Scripting
  const backendSkills: Skill[] = [
    { name: 'Python (Tkinter, Pandas, Twilio)', icon: <FaPython className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'SQL & DBMS', icon: <FaDatabase className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Java (Spring, Maven)', icon: <FaJava className="w-8 h-8 text-black dark:text-white" /> },
  ];

  // Priority #4: Tools & Version Control
  const toolsSkills: Skill[] = [
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'GitHub', icon: <FaGithub className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'MongoDB Atlas', icon: <SiMongodb className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Express.js', icon: <SiExpress className="w-8 h-8 text-black dark:text-white" /> },
  ];

  return (
    <section id="skills" className="bg-white text-black dark:bg-black dark:text-white py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-6">Systems & Admin</h3>
            <div className="flex flex-wrap gap-4">
              {systemsSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-6">Networking</h3>
            <div className="flex flex-wrap gap-4">
              {networkingSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold mb-6">Backend & Scripting</h3>
            <div className="flex flex-wrap gap-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-bold mb-6">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-4">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
