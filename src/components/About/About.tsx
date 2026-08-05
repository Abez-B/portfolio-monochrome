import React from 'react';
import { useCMS } from '../../cms/CMSContext';

const About: React.FC = () => {
  const { cmsData } = useCMS();
  const { about } = cmsData;

  return (
    <section id="about" className="text-black dark:text-white py-6 md:py-8 px-4 relative z-10">
      <div className="max-w-4xl mx-auto glass-card p-6 sm:p-10 shadow-2xl border border-white/20 dark:border-white/15">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 tracking-tight font-display">About Me</h2>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-xl leading-relaxed mb-5 sm:mb-6 font-medium">
          {about.bio1}
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
          {about.bio2}
        </p>

        {/* FOSSGCEE Highlight Card */}
        {about.fossgceeTitle && (
          <div className="mb-6 glass-card p-5 sm:p-7 text-left border border-white/20 dark:border-white/10 hover:border-white/30 transition-all">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black dark:text-white font-display">
              {about.fossgceeTitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {about.fossgceeDescription}{' '}
              {about.fossgceeLink && (
                <a
                  href={about.fossgceeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors ml-1 font-mono text-xs"
                >
                  <span>{about.fossgceeLink.replace(/^https?:\/\//, '')}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </p>
          </div>
        )}

        {/* Systems Focus Card */}
        {about.systemsFocusTitle && (
          <div className="mb-6 glass-card p-5 sm:p-7 text-left border border-white/20 dark:border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black dark:text-white font-display">
              {about.systemsFocusTitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {about.systemsFocusDescription}
            </p>
          </div>
        )}

        {/* Dynamic Custom Sections */}
        {about.customSections && about.customSections.map((sec) => (
          <div key={sec.id} className="mb-6 glass-card p-5 sm:p-7 text-left border border-white/20 dark:border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black dark:text-white font-display">{sec.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {sec.description}{' '}
              {sec.link && (
                <a
                  href={sec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors ml-1 font-mono text-xs"
                >
                  <span>{sec.link.replace(/^https?:\/\//, '')}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              )}
            </p>
          </div>
        ))}

        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base font-semibold">
            <span className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-[11px] font-mono font-bold block mb-1">Engineering Mission</span>
            "{about.goal}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;