import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useCMS } from '../cms/CMSContext';
import { 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Mail,
  Compass
} from 'lucide-react';

interface NavNode {
  id: string;
  label: string;
  to: string;
  icon: React.ReactNode;
}

export const FloatingAccessibilityButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cmsData } = useCMS();
  const isDraggingRef = useRef(false);

  const getPathForTarget = (to: string) => {
    if (to === 'hero' || to === '' || to === 'home') return '/';
    return `/${to}`;
  };

  const getIconForTarget = (to: string) => {
    const key = to.toLowerCase();
    if (key === 'home' || key === 'hero' || key === '') return <Home className="w-3.5 h-3.5" />;
    if (key === 'about') return <User className="w-3.5 h-3.5" />;
    if (key === 'skills') return <Cpu className="w-3.5 h-3.5" />;
    if (key === 'projects') return <FolderGit2 className="w-3.5 h-3.5" />;
    if (key === 'experience') return <Briefcase className="w-3.5 h-3.5" />;
    if (key === 'contact') return <Mail className="w-3.5 h-3.5" />;
    return <Compass className="w-3.5 h-3.5" />;
  };

  // Only include main navigation pages
  const navNodes: NavNode[] = [
    {
      id: 'home',
      label: 'Home',
      to: '/',
      icon: <Home className="w-3.5 h-3.5 text-blue-400" />
    },
    ...cmsData.navLinks.map((link) => ({
      id: link.to,
      label: link.name,
      to: getPathForTarget(link.to),
      icon: getIconForTarget(link.to)
    }))
  ];

  const totalNodes = navNodes.length;
  // Upward sunray semi-circle fan angles (-175 deg to -5 deg)
  const startAngle = -175 * (Math.PI / 180);
  const endAngle = -5 * (Math.PI / 180);

  // Smooth Sunray Arc curve: side nodes at 120px, middle nodes gracefully arching to 138px
  const getRadiusForIndex = (index: number) => {
    if (totalNodes <= 1) return 125;
    const progress = index / (totalNodes - 1);
    const sineFactor = Math.sin(progress * Math.PI); // 0 at ends, 1 in the middle
    return 120 + sineFactor * 18;
  };
  const maxRadius = 142;

  return (
    // Hidden on desktop (md:hidden), centered above the floating action island on mobile
    <div className="fixed bottom-20 inset-x-0 z-[80] flex md:hidden justify-center pointer-events-none select-none touch-none">
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.08}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={() => {
          setTimeout(() => {
            isDraggingRef.current = false;
          }, 100);
        }}
        initial={{ x: 0, y: 0 }}
        className="pointer-events-auto"
      >
        <div className="relative flex items-center justify-center">
          {/* Sunray Connecting Lines */}
          <AnimatePresence>
            {isOpen && (
              <svg
                className="absolute pointer-events-none z-0 overflow-visible"
                style={{ width: maxRadius * 2.5, height: maxRadius * 2.5 }}
                viewBox={`-${maxRadius * 1.25} -${maxRadius * 1.25} ${maxRadius * 2.5} ${maxRadius * 2.5}`}
              >
                {navNodes.map((_, index) => {
                  const angle = totalNodes > 1
                    ? startAngle + (index / (totalNodes - 1)) * (endAngle - startAngle)
                    : startAngle;
                  const nodeRadius = getRadiusForIndex(index);
                  const x = nodeRadius * Math.cos(angle);
                  const y = nodeRadius * Math.sin(angle);
                  return (
                    <motion.line
                      key={index}
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                      className="text-black/30 dark:text-white/30"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.025 }}
                    />
                  );
                })}
              </svg>
            )}
          </AnimatePresence>

          {/* Sunray Arc Radial Child Subnodes */}
          <AnimatePresence>
            {isOpen && (
              <>
                {navNodes.map((node, index) => {
                  const angle = totalNodes > 1
                    ? startAngle + (index / (totalNodes - 1)) * (endAngle - startAngle)
                    : startAngle;
                  const nodeRadius = getRadiusForIndex(index);
                  const targetX = nodeRadius * Math.cos(angle);
                  const targetY = nodeRadius * Math.sin(angle);

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                      animate={{ scale: 1, x: targetX, y: targetY, opacity: 1 }}
                      exit={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 24,
                        delay: index * 0.035
                      }}
                      className="absolute z-10 group cursor-pointer"
                    >
                      <NavLink
                        to={node.to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/95 dark:bg-black/90 text-black dark:text-white backdrop-blur-xl shadow-lg border border-black/15 dark:border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 ${
                            isActive ? 'ring-2 ring-emerald-500 font-bold bg-emerald-500/10' : ''
                          }`
                        }
                      >
                        <span className="p-0.5 rounded-full bg-black/5 dark:bg-white/10 shrink-0">
                          {node.icon}
                        </span>
                        <span className="font-mono text-[10px] font-bold tracking-tight pr-1 whitespace-nowrap">
                          {node.label}
                        </span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </>
            )}
          </AnimatePresence>

          {/* Compact Central Node Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              if (!isDraggingRef.current) {
                setIsOpen(!isOpen);
              }
            }}
            aria-label="Toggle Navigation Nodes"
            title="Drag node | Click for subnodes"
            className="relative z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-xl border border-white/20 dark:border-black/20 focus:outline-none cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ rotate: isOpen ? 135 : 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="flex items-center justify-center"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              ) : (
                <Compass className="w-5 h-5" />
              )}
            </motion.div>

            {/* Pulse ring indicator */}
            <span className="absolute -inset-0.5 rounded-full border border-emerald-500/50 animate-ping pointer-events-none opacity-30" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
