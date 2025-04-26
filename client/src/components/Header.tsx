
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="py-6 mb-8 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Decorative elements */}
          <motion.div
            className="absolute w-64 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="inline-flex items-center justify-center px-3 py-1 mb-3 text-xs font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Emotion Recognition
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-display font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Face Feelings Snapshot
            </span>
            
            {/* Decorative elements */}
            <motion.span 
              className="absolute -top-4 -right-4 text-5xl opacity-20"
              animate={{ rotate: [0, 10, 0], y: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Capture your expressions and discover your emotions in real-time
          </motion.p>
          
          {/* Decorative emotion icons */}
          <div className="flex justify-center mt-4 space-x-2">
            {['😊', '😢', '😮', '😠', '😐'].map((emoji, index) => (
              <motion.span 
                key={index}
                className="text-2xl opacity-60 dark:opacity-40"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: [0.4, 0.7, 0.4] }}
                transition={{ 
                  y: { delay: 0.5 + (index * 0.1), duration: 0.5 },
                  opacity: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
