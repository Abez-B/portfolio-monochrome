import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import bkLogo from '../../assets/images/BKlogo.png';
import { ThemeToggle } from '../ThemeToggle';
import { useCMS } from '../../cms/CMSContext';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  navLinks: Array<{ name: string; to: string }>;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu, navLinks }) => {
  const { cmsData } = useCMS();
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

  const getPathForTarget = (to: string) => {
    if (to === 'hero' || to === '' || to === 'home') return '/';
    return `/${to}`;
  };

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
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2.5 shrink-0 group cursor-pointer">
            <img 
              src={bkLogo} 
              alt="Logo" 
              loading="eager"
              decoding="async"
              className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110 dark:invert" 
            />
            <span className="text-sm font-extrabold tracking-wider text-black dark:text-white hidden sm:block font-mono">
              BHARATH
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-2 mx-auto">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-black/10 dark:bg-white/15 text-black dark:text-white font-bold border border-black/10 dark:border-white/20 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            {navLinks.map(({ name, to }) => {
              const targetPath = getPathForTarget(to);
              return (
                <li key={to}>
                  <NavLink
                    to={targetPath}
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? "bg-black/10 dark:bg-white/15 text-black dark:text-white font-bold border border-black/10 dark:border-white/20 shadow-sm"
                          : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Call to Action & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            {cmsData.hero.resumeUrl && (
              <a
                href={cmsData.hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[11px] font-bold transition-all duration-200 hover:scale-105 bg-black dark:bg-white text-white dark:text-black shadow-lg"
              >
                Resume
              </a>
            )}
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
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 font-mono text-xs py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-black/10 dark:bg-white/15 text-black dark:text-white font-bold"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`
                  }
                >
                  <span>›</span> Home
                </NavLink>
              </li>
              {navLinks.map(({ name, to }) => {
                const targetPath = getPathForTarget(to);
                return (
                  <li key={to}>
                    <NavLink
                      to={targetPath}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-2 font-mono text-xs py-2 px-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-black/10 dark:bg-white/15 text-black dark:text-white font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        }`
                      }
                    >
                      <span>›</span> {name}
                    </NavLink>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-black/10 dark:border-white/10 mt-1">
                <NavLink
                  to="/admin"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 font-mono text-xs py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-black/10 dark:bg-white/15 text-black dark:text-white font-bold"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`
                  }
                >
                  <span>⚙</span> Admin Studio
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;