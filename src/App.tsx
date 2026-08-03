import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import { FloatingActionIsland } from './components/FloatingActionIsland';
import LiquidEther from './components/LiquidEther';
import { ThemeContext } from './context/ThemeContext';
import { useCMS } from './cms/CMSContext';
import AdminPanel from './cms/AdminPanel';

const MainPortfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const { theme } = React.useContext(ThemeContext);
  const { cmsData } = useCMS();
  const navigate = useNavigate();

  // Dark: lots of whites + soft greys → bright white swirls on black
  // Light: white base + near-black + mid-grey → dark swirls on white
  const liquidColors = theme === 'dark'
    ? ['#000000', '#ffffff', '#ffffff', '#e8e8e8', '#d0d0d0', '#aaaaaa']
    : ['#ffffff', '#111111', '#7a7a7a'];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        navigate('/admin');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="text-black dark:text-white font-sans transition-colors duration-300 min-h-screen relative z-0">
      <div className="fixed inset-0 z-0 pointer-events-none bg-white dark:bg-black">
        <LiquidEther
          key={theme}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          colors={liquidColors}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={theme === 'dark' ? 3.5 : 2.2}
          isBounce={false}
          resolution={0.5}
        />
      </div>
      <Helmet>
        <title>{cmsData.meta.siteTitle}</title>
        <meta name="description" content={cmsData.meta.metaDescription} />
        <meta name="keywords" content={cmsData.meta.keywords} />
        <meta property="og:title" content={cmsData.meta.siteTitle} />
        <meta property="og:description" content={cmsData.meta.metaDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        closeMobileMenu={closeMobileMenu}
        navLinks={cmsData.navLinks}
      />
      <main className="pt-24 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingActionIsland />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;