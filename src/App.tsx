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

      {/* Mobile Menu Overlay - Moved to App root with extremely high z-index */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-[70] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
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
                className={`text-2xl font-black uppercase tracking-[0.2em] text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors`}
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
              className={`text-2xl font-black uppercase tracking-[0.2em] border-2 border-black dark:border-white px-8 py-3 rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300`}
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;