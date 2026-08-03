import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { gsap } from 'gsap';
import bkLogo from '../../assets/images/BKlogo.png';
import { ThemeToggle } from '../ThemeToggle';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  navLinks: Array<{ name: string; to: string }>;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu, navLinks }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => { if (window.innerWidth >= 768) closeMobileMenu(); };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [closeMobileMenu]);

  // GSAP entrance animation
  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating navbar pill */}
      <div
        ref={navRef}
        style={{ opacity: 0, transform: "translateY(-80px)" }}
        className={`w-full max-w-5xl transition-all duration-500 border ${
          mobileMenuOpen ? "rounded-2xl" : "rounded-full"
        } ${
          scrolled || mobileMenuOpen
            ? "bg-white/85 dark:bg-black/85 backdrop-blur-3xl shadow-2xl border-black/10 dark:border-white/10"
            : "bg-white/50 dark:bg-white/5 backdrop-blur-xl border-black/5 dark:border-white/10"
        }`}
      >
        {/* Navbar Row */}
        <nav className="px-5 h-[54px] flex items-center justify-between gap-4">
          {/* Logo Section */}
          <ScrollLink to="hero" smooth={true} duration={500} onClick={closeMobileMenu} className="flex items-center gap-2.5 shrink-0 group cursor-pointer">
            <img 
              src={bkLogo} 
              alt="Logo" 
              className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110 dark:invert" 
            />
            <span className="text-sm font-extrabold tracking-wider text-black dark:text-white hidden sm:block font-mono">
              BHARATH
            </span>
          </ScrollLink>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 mx-auto">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="font-bold text-black dark:text-white border-b-2 border-black dark:border-white"
                  className="font-mono text-xs uppercase tracking-wider transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer py-1"
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Call to Action & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <a
              href="https://drive.google.com/file/d/1MwlG95bm4T963YPAS6rVrX8gYdeTDHah/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[11px] font-bold transition-all duration-200 hover:scale-105 bg-black dark:bg-white text-white dark:text-black shadow-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-1.5 rounded-full transition-colors bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {mobileMenuOpen
                ? <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                : <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              }
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-5 pb-4 border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-3xl rounded-b-2xl">
            <ul className="flex flex-col gap-1.5 pt-3">
              {navLinks.map(({ name, to }) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 font-mono text-xs py-2 px-3 rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
                  >
                    <span>›</span> {name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;