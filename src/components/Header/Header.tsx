import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating pill container */}
      <div
        ref={navRef}
        style={{ opacity: 0, transform: "translateY(-80px)" }}
        className={`w-full max-w-5xl transition-all duration-500 border ${
          mobileMenuOpen ? "rounded-2xl" : "rounded-full"
        } ${
          scrolled || mobileMenuOpen
            ? "bg-white/85 dark:bg-black/85 backdrop-blur-3xl shadow-2xl border-black/10 dark:border-white/10"
            : "bg-black/5 dark:bg-white/5 backdrop-blur-xl border-black/5 dark:border-white/5"
        }`}
      >
        {/* Main Navbar Row */}
        <nav className="px-5 h-[52px] flex items-center justify-between gap-4">
          {/* Logo Section */}
          <Link to="hero" smooth={true} duration={500} onClick={closeMobileMenu} className="flex items-center gap-2 shrink-0 group cursor-pointer">
            <img 
              src={bkLogo} 
              alt="Logo" 
              className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110 dark:invert" 
            />
            <span className="text-sm font-bold tracking-wider text-black dark:text-white hidden sm:block">
              BHARATH
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7 mx-auto">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className="font-mono text-xs uppercase tracking-wide transition-colors duration-200 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Call to Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download="Bharath_Kumar_Resume.pdf"
              className="inline-flex shrink-0 items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[11px] font-semibold transition-all duration-200 hover:scale-105 bg-black dark:bg-white text-white dark:text-black shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
            >
              $ Resume
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-5 pb-4 border-t border-black/10 dark:border-white/10 bg-white/85 dark:bg-black/85 backdrop-blur-3xl rounded-b-2xl">
            <ul className="flex flex-col gap-2 pt-3">
              {navLinks.map(({ name, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 font-mono text-xs py-2 transition-colors text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
                  >
                    <span className="text-black dark:text-white">›</span> {name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 pb-2 border-t border-black/5 dark:border-white/5 mt-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">Theme</span>
              <ThemeToggle />
            </div>

            <div className="mt-2 pt-2 border-t border-black/10 dark:border-white/10">
              <a
                href="/resume.pdf"
                download="Bharath_Kumar_Resume.pdf"
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-full px-4 py-2 rounded-xl text-sm font-mono font-semibold bg-black dark:bg-white text-white dark:text-black"
              >
                $ Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;