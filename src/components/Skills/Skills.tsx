import React from 'react';
import { FaLinux, FaNetworkWired, FaCode, FaTools } from 'react-icons/fa';
import { useCMS } from '../../cms/CMSContext';

const getCategoryIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('system') || t.includes('admin') || t.includes('devops')) return <FaLinux className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
  if (t.includes('network') || t.includes('web')) return <FaNetworkWired className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
  if (t.includes('language') || t.includes('backend') || t.includes('scripting')) return <FaCode className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
  return <FaTools className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
};

const Skills: React.FC = () => {
  const { cmsData } = useCMS();

  return (
    <section id="skills" className="text-black dark:text-white py-6 md:py-8 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Technical Toolkit</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto text-balance">
            Core engineering competencies spanning systems administration, networking, full-stack web, and DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {cmsData.skillCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-5 sm:p-7 shadow-xl border border-white/20 dark:border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-4">
                <div className="p-2.5 rounded-xl glass-tag">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">{category.title}</h3>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">
                    {category.skills.length} Competencies
                  </span>
                </div>
              </div>

              {/* Compact, elegant glass pills layout */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="glass-tag px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all hover:scale-105 hover:border-white/40 cursor-default"
                  >
                    {skill.name}
                  </span>
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
