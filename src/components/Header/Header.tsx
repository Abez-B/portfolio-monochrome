import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import darkLogo from '../../logo-dark.svg';
import lightLogo from '../../logo-light.svg';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const headerBgClass = scrolled || mobileMenuOpen
    ? 'bg-white dark:bg-black shadow-lg'
    : 'bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 backdrop-blur-md';

  const textColorClass = 'text-gray-700 dark:text-white';
  const hoverColorClass = 'hover:text-black dark:hover:text-gray-300';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer" onClick={closeMobileMenu}>
            <img 
              src={theme === 'dark' ? darkLogo : lightLogo} 
              alt="Logo" 
              className="h-8 w-auto transition-transform hover:scale-110" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className={`${textColorClass} ${hoverColorClass} transition-colors duration-300 cursor-pointer text-sm font-medium uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="Bharath_Kumar_Resume.pdf"
              className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-sm"
            >
              Resume
            </a>
          </li>
          <li>
            <button 
              onClick={toggleTheme} 
              className={`${textColorClass} ${hoverColorClass} transition-colors duration-300 p-2`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle & Theme (Visible on Mobile) */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className={`${textColorClass} p-2`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className={`${textColorClass} focus:outline-none p-2`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className={`text-2xl font-bold uppercase tracking-widest ${textColorClass} ${hoverColorClass} transition-colors`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="Bharath_Kumar_Resume.pdf"
              className={`text-2xl font-bold uppercase tracking-widest border-2 border-black dark:border-white px-8 py-3 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300`}
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;