import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
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

// Home Overview Page (Hero + Explore Quick Cards)
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold tracking-tight mb-2">Explore My Portfolio</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Navigate through discrete sections to learn about my background, skills, and projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/about"
            className="glass-card p-6 flex flex-col justify-between hover:scale-[1.03] transition-all border border-white/20 dark:border-white/10 group"
          >
            <div>
              <span className="text-2xl mb-2 block">👤</span>
              <h4 className="font-bold text-lg mb-1 group-hover:underline">About Me</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Background, FOSS Club leadership, and engineering goals.
              </p>
            </div>
            <span className="text-xs font-mono font-bold mt-4 text-blue-500 dark:text-blue-400">Read Bio →</span>
          </Link>

          <Link
            to="/skills"
            className="glass-card p-6 flex flex-col justify-between hover:scale-[1.03] transition-all border border-white/20 dark:border-white/10 group"
          >
            <div>
              <span className="text-2xl mb-2 block">🛠</span>
              <h4 className="font-bold text-lg mb-1 group-hover:underline">Skills Toolkit</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Linux, KVM, Docker, C++, Python, TS, and DevOps skills.
              </p>
            </div>
            <span className="text-xs font-mono font-bold mt-4 text-emerald-500 dark:text-emerald-400">View Skills →</span>
          </Link>

          <Link
            to="/projects"
            className="glass-card p-6 flex flex-col justify-between hover:scale-[1.03] transition-all border border-white/20 dark:border-white/10 group"
          >
            <div>
              <span className="text-2xl mb-2 block">📁</span>
              <h4 className="font-bold text-lg mb-1 group-hover:underline">Projects</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Thirukkural Widget, Tamil OCR Pipeline, Health Monitor, and DApps.
              </p>
            </div>
            <span className="text-xs font-mono font-bold mt-4 text-purple-500 dark:text-purple-400">Browse Projects →</span>
          </Link>

          <Link
            to="/contact"
            className="glass-card p-6 flex flex-col justify-between hover:scale-[1.03] transition-all border border-white/20 dark:border-white/10 group"
          >
            <div>
              <span className="text-2xl mb-2 block">📬</span>
              <h4 className="font-bold text-lg mb-1 group-hover:underline">Contact & QR</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Connect on Mastodon, Matrix, Telegram, WhatsApp & email.
              </p>
            </div>
            <span className="text-xs font-mono font-bold mt-4 text-amber-500 dark:text-amber-400">Scan & Connect →</span>
          </Link>
        </div>
      </section>
    </>
  );
};

const PortfolioLayout: React.FC = () => {
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

      <main className="pt-24 pb-12 relative z-10 flex-1">
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
      <Route path="/*" element={<PortfolioLayout />} />
    </Routes>
  );
};

export default App;