import React from 'react';
import { useCMS } from '../../cms/CMSContext';

const Footer: React.FC = () => {
  const { cmsData } = useCMS();
  const { footer } = cmsData;

  return (
    <footer className="text-black dark:text-white py-8 px-4 text-center border-t border-white/10 dark:border-white/10 backdrop-blur-sm bg-white/5 dark:bg-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          &copy; {new Date().getFullYear()} {footer.ownerName}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          {footer.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;