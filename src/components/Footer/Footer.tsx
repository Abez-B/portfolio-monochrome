import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black py-8 px-4 text-center backdrop-blur-md bg-opacity-70 dark:bg-opacity-70">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          &copy; {new Date().getFullYear()} Bharath Kumar. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Abez-B"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bharath-kumarjp02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;