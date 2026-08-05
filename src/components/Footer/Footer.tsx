import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../cms/CMSContext';

const Footer: React.FC = () => {
  const { cmsData } = useCMS();
  const { footer } = cmsData;

  return (
    <footer className="text-black dark:text-white pt-8 pb-28 md:pb-10 px-4 text-center border-t border-white/10 dark:border-white/10 backdrop-blur-sm bg-white/5 dark:bg-white/5 relative z-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-4 font-medium">
          &copy; {new Date().getFullYear()} {footer.ownerName}. All rights reserved.
        </p>
        
        {/* Responsive flex-wrap grid for social links so all links wrap neatly on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2.5 max-w-xl mx-auto text-xs sm:text-sm font-medium">
          {footer.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:underline"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/admin"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:underline font-mono"
          >
            ⚙ Admin Studio
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;