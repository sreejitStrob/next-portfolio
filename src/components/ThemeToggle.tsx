"use client";

import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      const stored = localStorage.getItem("theme");
      if (stored) {
        setTheme(stored as "light" | "dark");
        document.documentElement.classList.toggle("dark", stored === "dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", prefersDark);
        setTheme(prefersDark ? "dark" : "light");
      }
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);
    };

    // Prevent hydration mismatch
    if (!mounted) {
      return (
        <button className="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 group">
          <MdLightMode className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300"/>
        </button>
      );
    }

    return (
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 group relative overflow-hidden"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <div className="relative">
            {/* Light mode icon - shown when in dark mode */}
            <MdLightMode 
              className={`text-2xl text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-all duration-300 ${
                theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'
              }`}
            />
            
            {/* Dark mode icon - shown when in light mode */}
            <MdOutlineDarkMode 
              className={`text-2xl text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white transition-all duration-300 ${
                theme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-75 absolute'
              }`}
            />
          </div>
          
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
    );
}