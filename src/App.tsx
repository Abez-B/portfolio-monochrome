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
        <title>Bharath's portfolio</title>
        <meta name="description" content="The personal portfolio of Bharath Kumar, a full-stack developer passionate about creating innovative and impactful web solutions." />
        <meta name="keywords" content="react, typescript, tailwindcss, nodejs, python, solidity, web3, full-stack, developer, portfolio" />
        <meta property="og:title" content="Bharath Kumar - Full-Stack Developer" />
        <meta property="og:description" content="The personal portfolio of Bharath Kumar, a full-stack developer passionate about creating innovative and impactful web solutions." />
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