import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCMS } from '../cms/CMSContext';
import { ThemeContext } from '../context/ThemeContext';
import {
  Compass,
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Mail,
  Sun,
  Moon,
  FileDown,
  Copy,
  ExternalLink,
  Shield,
  Search,
  CornerDownLeft,
} from 'lucide-react';

interface PaletteItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social & Projects';
  subtitle?: string;
  shortcut?: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { cmsData } = useCMS();
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items: PaletteItem[] = useMemo(() => {
    const list: PaletteItem[] = [
      // Navigation
      {
        id: 'nav-home',
        title: 'Home',
        category: 'Navigation',
        subtitle: 'Main landing view',
        icon: <Home className="w-4 h-4" />,
        onSelect: () => { navigate('/'); onClose(); },
      },
      {
        id: 'nav-about',
        title: 'About Me',
        category: 'Navigation',
        subtitle: 'Bio, mission & background',
        icon: <User className="w-4 h-4" />,
        onSelect: () => { navigate('/about'); onClose(); },
      },
      {
        id: 'nav-skills',
        title: 'Technical Toolkit',
        category: 'Navigation',
        subtitle: 'Linux, Systems, DevOps, Full-Stack',
        icon: <Cpu className="w-4 h-4" />,
        onSelect: () => { navigate('/skills'); onClose(); },
      },
      {
        id: 'nav-projects',
        title: 'Featured Projects',
        category: 'Navigation',
        subtitle: 'Open-source software & applications',
        icon: <FolderGit2 className="w-4 h-4" />,
        onSelect: () => { navigate('/projects'); onClose(); },
      },
      {
        id: 'nav-experience',
        title: 'Experience & Education',
        category: 'Navigation',
        subtitle: 'FOSS Club lead & academic credentials',
        icon: <Briefcase className="w-4 h-4" />,
        onSelect: () => { navigate('/experience'); onClose(); },
      },
      {
        id: 'nav-contact',
        title: 'Get in Touch',
        category: 'Navigation',
        subtitle: 'QR codes, handles & direct message',
        icon: <Mail className="w-4 h-4" />,
        onSelect: () => { navigate('/contact'); onClose(); },
      },

      // Actions
      {
        id: 'action-theme',
        title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
        category: 'Actions',
        subtitle: 'Toggle global color scheme',
        icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />,
        onSelect: () => { toggleTheme(); onClose(); },
      },
      {
        id: 'action-resume',
        title: 'Download Resume (PDF)',
        category: 'Actions',
        subtitle: 'Open latest CV in new tab',
        icon: <FileDown className="w-4 h-4" />,
        onSelect: () => {
          if (cmsData.hero.resumeUrl) {
            window.open(cmsData.hero.resumeUrl, '_blank', 'noopener,noreferrer');
          }
          onClose();
        },
      },
      {
        id: 'action-copy-email',
        title: copied ? 'Email Copied!' : 'Copy Email Address',
        category: 'Actions',
        subtitle: cmsData.contact.email,
        icon: <Copy className="w-4 h-4" />,
        onSelect: () => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(cmsData.contact.email);
            setCopied(true);
            setTimeout(() => { setCopied(false); onClose(); }, 600);
          }
        },
      },
      {
        id: 'action-admin',
        title: 'Admin Studio',
        category: 'Actions',
        subtitle: 'Content management workspace (Ctrl+Shift+A)',
        icon: <Shield className="w-4 h-4" />,
        onSelect: () => { navigate('/admin'); onClose(); },
      },

      // Social / Links
      {
        id: 'social-github',
        title: 'GitHub Profile',
        category: 'Social & Projects',
        subtitle: 'github.com/Abez-B',
        icon: <ExternalLink className="w-4 h-4" />,
        onSelect: () => { window.open('https://github.com/Abez-B', '_blank', 'noopener,noreferrer'); onClose(); },
      },
      {
        id: 'social-linkedin',
        title: 'LinkedIn Profile',
        category: 'Social & Projects',
        subtitle: cmsData.contact.linkedinHandle,
        icon: <ExternalLink className="w-4 h-4" />,
        onSelect: () => { window.open(cmsData.contact.linkedinUrl, '_blank', 'noopener,noreferrer'); onClose(); },
      },
      {
        id: 'social-fossgcee',
        title: 'FOSS GCEE Website',
        category: 'Social & Projects',
        subtitle: 'fossgcee.vercel.app',
        icon: <ExternalLink className="w-4 h-4" />,
        onSelect: () => { window.open('https://fossgcee.vercel.app', '_blank', 'noopener,noreferrer'); onClose(); },
      },
    ];

    return list;
  }, [navigate, onClose, theme, toggleTheme, cmsData, copied]);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  }, [items, search]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].onSelect();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100000] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-2xl cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
        >
          <motion.div
            className="relative z-10 w-full max-w-xl glass-card rounded-2xl shadow-2xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-black/95 backdrop-blur-3xl text-black dark:text-white overflow-hidden cursor-default flex flex-col max-h-[75vh]"
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/10 dark:border-white/10">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder-gray-400 text-black dark:text-white"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/10 shrink-0">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 flex-1 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-gray-400 text-xs font-mono">
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.onSelect}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors duration-150 ${
                        isSelected
                          ? 'bg-black/10 dark:bg-white/15 text-black dark:text-white font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-black dark:bg-white text-white dark:text-black' : 'glass-tag'}`}>
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-medium truncate">{item.title}</p>
                          {item.subtitle && (
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{item.subtitle}</p>
                          )}
                        </div>
                      </div>
                      {isSelected && (
                        <span className="flex items-center gap-1 font-mono text-[10px] text-gray-500 dark:text-gray-400 shrink-0 pl-2">
                          <CornerDownLeft className="w-3 h-3" /> Select
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Status Bar */}
            <div className="px-4 py-2.5 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Systems Command
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
