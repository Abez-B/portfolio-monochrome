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
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    // Diagnostic Alert
    window.alert('Toggle Menu Clicked! New state will be: ' + (!mobileMenuOpen ? 'OPEN' : 'CLOSED'));
    setMobileMenuOpen(!mobileMenuOpen);
  };
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

      {/* Mobile Menu Overlay - Nuclear Visibility Fix (Diagnostic v3.3) */}
      {mobileMenuOpen && (
        <div
          style={{ 
            position: 'fixed', 
            inset: 0, 
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="flex flex-col items-center space-y-12 px-4 text-center">
            <h2 className="text-4xl font-black text-red-600 uppercase tracking-tighter">DIAGNOSTIC v3.3</h2>
            <p className="text-black dark:text-white font-bold">If you see this, the menu is working!</p>
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
            <button
              onClick={closeMobileMenu}
              className="mt-8 px-12 py-4 bg-red-600 text-white font-bold rounded-full uppercase text-xl shadow-2xl"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;