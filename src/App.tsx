import React, { useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FloatingActionIsland } from './components/FloatingActionIsland';
import { FloatingAccessibilityButton } from './components/FloatingAccessibilityButton';
import LiquidEther from './components/LiquidEther';
import { ThemeContext } from './context/ThemeContext';
import { useCMS } from './cms/CMSContext';

const Hero = lazy(() => import('./components/Hero/Hero'));
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const AdminPanel = lazy(() => import('./cms/AdminPanel'));

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
      
      {/* Background Liquid Simulation (Disabled on mobile for performance) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-white dark:bg-black">
        {!isMobile && (
          <LiquidEther
            key={theme}
            mouseForce={18}
            cursorSize={90}
            isViscous={false}
            viscous={25}
            iterationsPoisson={14}
            iterationsViscous={14}
            colors={liquidColors}
            autoDemo
            autoSpeed={0.45}
            autoIntensity={theme === 'dark' ? 3.2 : 2.0}
            isBounce={false}
            resolution={0.25}
          />
        )}
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

      <main className="pt-20 pb-8 relative z-10 flex-1 space-y-6 md:space-y-8">
        <Suspense fallback={<div className="flex justify-center items-center h-64 text-gray-500 font-mono text-sm animate-pulse">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingActionIsland />
      <FloatingAccessibilityButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen bg-black text-white font-mono text-sm animate-pulse">Initializing...</div>}>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/*" element={<MainPortfolio />} />
      </Routes>
    </Suspense>
  );
};

export default App;