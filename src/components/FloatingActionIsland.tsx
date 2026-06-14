import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function FloatingActionIsland() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex md:hidden justify-center pointer-events-none">
      <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-white/85 dark:bg-black/85 backdrop-blur-3xl shadow-2xl border border-black/10 dark:border-white/10 pointer-events-auto transition-all duration-300">
        <ThemeToggle />
        <a
          href="https://drive.google.com/file/d/1MwlG95bm4T963YPAS6rVrX8gYdeTDHah/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2 rounded-full font-mono text-[13px] font-bold transition-transform hover:scale-105 bg-black dark:bg-white text-white dark:text-black shadow-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
