import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import darkLogo from '../../logo-dark.svg';
import lightLogo from '../../logo-light.svg';


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg dark:bg-white' : 'bg-black bg-opacity-70 dark:bg-white dark:bg-opacity-70 backdrop-blur-md'}`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <img src={theme === 'dark' ? darkLogo : lightLogo} alt="Bharath Kumar Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/assets/resume.pdf"
              download
              className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300"
            >
              Download Resume
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="text-white dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-900 transition-colors duration-300">
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;