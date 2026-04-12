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

      {/* Mobile Menu Overlay - Brute Force Visibility Fix */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-[100] flex flex-col items-center justify-center transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-12">
          <h2 className="text-4xl font-black text-red-600 uppercase tracking-tighter">Menu Content</h2>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-3xl font-black text-black dark:text-white uppercase hover:text-blue-600 transition-colors"
          >
            01. About Me
          </a>
          <a
            href="#skills"
            onClick={closeMobileMenu}
            className="text-3xl font-black text-black dark:text-white uppercase hover:text-blue-600 transition-colors"
          >
            02. My Skills
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="text-3xl font-black text-black dark:text-white uppercase hover:text-blue-600 transition-colors"
          >
            03. Projects
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="text-3xl font-black text-black dark:text-white uppercase hover:text-blue-600 transition-colors"
          >
            04. Contact
          </a>
          <button
            onClick={closeMobileMenu}
            className="mt-8 px-8 py-3 bg-red-600 text-white font-bold rounded-full uppercase"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;