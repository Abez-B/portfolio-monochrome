import React from 'react';
import { FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaLinux, FaJava, FaPython, FaNetworkWired, FaServer, FaTerminal } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { useCMS } from '../../cms/CMSContext';

interface SkillIconProps {
  children: React.ReactNode;
}

const SkillIcon: React.FC<SkillIconProps> = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center glass-tag rounded-full p-2">
    {children}
  </div>
);

// Generic icon for unknown skills
const DefaultIcon = () => <FaTerminal className="w-8 h-8 text-black dark:text-white" />;

const getIconForSkill = (name: string): React.ReactNode => {
  const n = name.toLowerCase();
  if (n.includes('linux') || n.includes('ubuntu') || n.includes('arch')) return <FaLinux className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('shell') || n.includes('bash')) return <FaTerminal className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('server') || n.includes('system')) return <FaServer className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('zabbix') || n.includes('network') || n.includes('tcp')) return <FaNetworkWired className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('python')) return <FaPython className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('sql') || n.includes('dbms')) return <FaDatabase className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('node')) return <FaNodeJs className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('java')) return <FaJava className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('github')) return <FaGithub className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('git')) return <FaGitAlt className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('mongo')) return <SiMongodb className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('express')) return <SiExpress className="w-8 h-8 text-black dark:text-white" />;
  
  return <DefaultIcon />;
};

const Skills: React.FC = () => {
  const { cmsData } = useCMS();

  return (
    <section id="skills" className="text-black dark:text-white py-12 md:py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-stretch">
          {cmsData.skillCategories.map((category, index) => (
            <div key={category.id} className="glass-card p-6 shadow-md" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="flex items-center space-x-2 w-full">
                    <SkillIcon>{getIconForSkill(skill.name)}</SkillIcon>
                    <span className="text-black dark:text-white text-lg leading-none flex-grow min-w-0">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
