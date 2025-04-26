
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import EmotionCapture from '@/components/EmotionCapture';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowLeft } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-pink-100 dark:bg-pink-900/20 blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      
      <ThemeToggle />
      
      <Link to="/" className="absolute top-4 left-4 z-10">
        <motion.button
          className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>
      </Link>
      
      <motion.div 
        className="container max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header />
        
        <motion.div 
          className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-effect rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.2,
            ease: [0.19, 1, 0.22, 1]
          }}
        >
          <EmotionCapture />
        </motion.div>
        
        <motion.footer
          className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>
            Designed with precision and simplicity. <br />
            Capturing emotions in their purest form.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Index;
