import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

// ScrollToTop on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home Landing Page: Hero, About & Contact
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

const MainPortfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const { theme } = React.useContext(ThemeContext);
  const { cmsData } = useCMS();
  const navigate = useNavigate();

  const liquidColors = theme === 'dark'
    ? ['#000000', '#ffffff', '#ffffff', '#e8e8e8', '#d0d0d0', '#aaaaaa']
    : ['#ffffff', '#111111', '#7a7a7a'];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.innerWidth < 768,
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
    <div className="text-black dark:text-white font-sans transition-colors duration-300 min-h-screen relative z-0 flex flex-col justify-between">
      <ScrollToTop />
      
      {/* Background Liquid Simulation */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-white dark:bg-black">
        <LiquidEther
          key={theme}
          mouseForce={isMobile ? 12 : 20}
          cursorSize={isMobile ? 60 : 100}
          isViscous={false}
          viscous={30}
          iterationsPoisson={isMobile ? 12 : 32}
          iterationsViscous={isMobile ? 12 : 32}
          colors={liquidColors}
          autoDemo
          autoSpeed={isMobile ? 0.3 : 0.5}
          autoIntensity={theme === 'dark' ? (isMobile ? 2.5 : 3.5) : (isMobile ? 1.5 : 2.2)}
          isBounce={false}
          resolution={isMobile ? 0.25 : 0.5}
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

      <main className="pt-24 pb-12 relative z-10 flex-1 space-y-12 md:space-y-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActionIsland />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/*" element={<MainPortfolio />} />
    </Routes>
  );
};

export default App;