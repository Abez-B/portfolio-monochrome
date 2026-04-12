import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-sans transition-colors duration-300 min-h-screen">
      <Helmet>
        <title>Bharath Kumar | System & Network Engineer</title>
        <meta name="description" content="System Administrator and Network Engineer specializing in Linux systems, network monitoring, infrastructure security, and automation." />
        <meta name="keywords" content="system administrator, network engineer, Linux, Zabbix, network monitoring, cybersecurity, infrastructure, DevOps, system optimization" />
        <meta property="og:title" content="Bharath Kumar - System & Network Engineer" />
        <meta property="og:description" content="System Administrator and Network Engineer specializing in Linux systems, network monitoring, infrastructure security, and automation." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        closeMobileMenu={closeMobileMenu}
        navLinks={navLinks}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      {/* Mobile Menu Overlay - Restored Design with Fixed Root Mounting */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white dark:bg-black z-[9999] flex flex-col items-center justify-center transition-all duration-300 animate-in fade-in fill-mode-both"
        >
          <ul className="flex flex-col items-center space-y-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-3xl font-black uppercase tracking-[0.2em] text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
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
                className="text-2xl font-black uppercase tracking-[0.2em] border-2 border-black dark:border-white px-10 py-4 rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-xl"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
            <li>
              <button
                onClick={closeMobileMenu}
                className="mt-12 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Close Menu</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;