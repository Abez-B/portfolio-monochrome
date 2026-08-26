import React from 'react';
import { useCMS } from '../../cms/CMSContext';

const Experience: React.FC = () => {
  const { cmsData } = useCMS();
  const experienceData = cmsData.experience;
  const educationData = cmsData.education;

  return (
    <section id="experience" className="text-black dark:text-white py-6 md:py-8 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience &amp; Education</h2>
        <div className={`grid gap-16 ${experienceData.length > 0 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-xl mx-auto'}`}>
          {experienceData.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
              <div className="relative border-l-2 border-gray-700 dark:border-gray-700 overflow-visible">
                {experienceData.map((item, index) => (
                  <div key={item.id || index} className="mb-8 ml-4 p-4 rounded-lg backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 glass-card">
                    <div className="absolute -left-1.5 top-5 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{item.date}</p>
                    <h4 className="text-xl font-semibold text-black dark:text-white">{item.title}</h4>
                    <p className="text-gray-900 dark:text-gray-100 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-800 dark:text-gray-200 text-balance">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {educationData.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-8">Education</h3>
              <div className="relative border-l-2 border-gray-700 dark:border-gray-700 overflow-visible">
                {educationData.map((item, index) => (
                  <div key={item.id || index} className="mb-8 ml-4 p-4 rounded-lg backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 glass-card">
                    <div className="absolute -left-1.5 top-5 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{item.date}</p>
                    <h4 className="text-xl font-semibold text-black dark:text-white">{item.title}</h4>
                    <p className="text-gray-900 dark:text-gray-100 font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-800 dark:text-gray-200 text-balance">{item.description}</p>
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
