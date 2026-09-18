import React from 'react';
import { useCMS } from '../../cms/CMSContext';

const Experience: React.FC = () => {
  const { cmsData } = useCMS();
  const experienceData = cmsData.experience;
  const educationData = cmsData.education;

  return (
    <section id="experience" className="text-black dark:text-white py-6 md:py-8 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-display">Experience &amp; Education</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto text-balance">
            Academic foundation, engineering leadership, and open-source contributions.
          </p>
        </div>

        <div className={`grid gap-10 sm:gap-14 ${experienceData.length > 0 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-xl mx-auto'}`}>
          {experienceData.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-display tracking-tight">Professional Experience</h3>
              <div className="relative border-l-2 border-black/10 dark:border-white/15 overflow-visible pl-1">
                {experienceData.map((item, index) => (
                  <div key={item.id || index} className="relative mb-8 ml-4 p-5 sm:p-6 rounded-2xl glass-card transition-all duration-200 hover:scale-[1.01]">
                    <div className="absolute -left-[23px] top-6 w-3 h-3 bg-black dark:bg-white rounded-full ring-4 ring-white dark:ring-black"></div>
                    <span className="inline-block font-mono text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">{item.date}</span>
                    <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-1 font-display tracking-tight">{item.title}</h4>
                    <p className="text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm mb-3">{item.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed text-balance">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {educationData.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-display tracking-tight">Education</h3>
              <div className="relative border-l-2 border-black/10 dark:border-white/15 overflow-visible pl-1">
                {educationData.map((item, index) => (
                  <div key={item.id || index} className="relative mb-8 ml-4 p-5 sm:p-6 rounded-2xl glass-card transition-all duration-200 hover:scale-[1.01]">
                    <div className="absolute -left-[23px] top-6 w-3 h-3 bg-black dark:bg-white rounded-full ring-4 ring-white dark:ring-black"></div>
                    <span className="inline-block font-mono text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">{item.date}</span>
                    <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-1 font-display tracking-tight">{item.title}</h4>
                    <p className="text-gray-900 dark:text-gray-100 font-medium text-xs sm:text-sm mb-3">{item.institution}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed text-balance">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
