import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} font-sans`}>
      <Helmet>
        <title>Bharath Kumar | System & Network Engineer</title>
        <meta name="description" content="System Administrator and Network Engineer specializing in Linux systems, network monitoring, infrastructure security, and automation." />
        <meta name="keywords" content="system administrator, network engineer, Linux, Zabbix, network monitoring, cybersecurity, infrastructure, DevOps, system optimization" />
        <meta property="og:title" content="Bharath Kumar - System & Network Engineer" />
        <meta property="og:description" content="System Administrator and Network Engineer specializing in Linux systems, network monitoring, infrastructure security, and automation." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;