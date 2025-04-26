
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md dark:bg-black/10 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
