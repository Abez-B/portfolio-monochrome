import React from 'react';
import { useCMS } from '../../cms/CMSContext';

const About: React.FC = () => {
  const { cmsData } = useCMS();
  const { about } = cmsData;

  // Small helper to bold parts of text based on original content or just render the text
  // Since the user might edit it and the CMS just provides a plain string, 
  // we can just render the plain string, or if we want we can use a markdown parser. 
  // For simplicity, we just render as string.
  return (
    <section id="about" className="text-black dark:text-white py-12 md:py-16 px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center glass-card p-5 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About Me</h2>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-xl leading-relaxed mb-5 sm:mb-6 font-medium">
          {about.bio1}
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg leading-relaxed mb-5 sm:mb-6">
          {about.bio2}
        </p>

        {/* FOSSGCEE highlight */}
        {about.fossgceeTitle && (
          <div className="mb-5 sm:mb-6 glass-card p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-black dark:text-white">{about.fossgceeTitle}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg leading-relaxed">
              {about.fossgceeDescription}{' '}
              {about.fossgceeLink && (
                <a
                  href={about.fossgceeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
                >
                  {about.fossgceeLink.replace(/^https?:\/\//, '')} →
                </a>
              )}
            </p>
          </div>
        )}

        {about.systemsFocusTitle && (
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-black dark:text-white">{about.systemsFocusTitle}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg leading-relaxed">
              {about.systemsFocusDescription}
            </p>
          </div>
        )}

        {/* Dynamic Custom Sections */}
        {about.customSections && about.customSections.map((sec) => (
          <div key={sec.id} className="mb-5 sm:mb-6 glass-card p-4 sm:p-6 text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-black dark:text-white">{sec.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg leading-relaxed">
              {sec.description}{' '}
              {sec.link && (
                <a
                  href={sec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300 ml-1"
                >
                  {sec.link.replace(/^https?:\/\//, '')} →
                </a>
              )}
            </p>
          </div>
        ))}

        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg leading-relaxed font-medium">
          <strong>My goal:</strong> {about.goal}
        </p>
      </div>
    </section>
  );
};

export default About;