import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaDatabase, FaLinux, FaJava, FaPython, FaNetworkWired } from 'react-icons/fa'; // Added FaDatabase, FaLinux, FaJava, FaPython, FaNetworkWired
import { SiJavascript, SiTailwindcss, SiExpress, SiSolidity, SiWeb3Dotjs, SiMongodb } from 'react-icons/si';

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
  const frontendSkills: Skill[] = [
    { name: 'React.js', icon: <FaReact className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="w-8 h-8 text-black dark:text-white" /> },
  ];

  const backendSkills: Skill[] = [
    { name: 'Python (Tkinter, Pandas, PIL, Twilio)', icon: <FaPython className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Express.js', icon: <SiExpress className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Java (Spring, Maven, Eclipse)', icon: <FaJava className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'SQL & DBMS', icon: <FaDatabase className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'MongoDB Atlas', icon: <SiMongodb className="w-8 h-8 text-black dark:text-white" /> },
  ];

  const blockchainSkills: Skill[] = [
    { name: 'Solidity', icon: <SiSolidity className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Web3.js', icon: <SiWeb3Dotjs className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Ethers.js', icon: <FaCode className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Truffle', icon: <FaCode className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Hardhat', icon: <FaCode className="w-8 h-8 text-black dark:text-white" /> },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'GitHub', icon: <FaGithub className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Linux', icon: <FaLinux className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Zabbix', icon: <FaNetworkWired className="w-8 h-8 text-black dark:text-white" /> },
    { name: 'Network Monitoring', icon: <FaNetworkWired className="w-8 h-8 text-black dark:text-white" /> },
  ];

  return (
    <section id="skills" className="bg-black text-white dark:bg-white dark:text-black py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          <div className="bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 rounded-lg p-6 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 rounded-lg p-6 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 rounded-lg p-6 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-bold mb-6">Blockchain</h3>
            <div className="flex flex-wrap gap-4">
              {blockchainSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 w-full">
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span className="text-white dark:text-black text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-300 rounded-lg p-6 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-bold mb-6">Tools & APIs</h3>
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
