
import React from 'react';
import { motion } from 'framer-motion';

interface CaptureButtonProps {
  onClick: () => void;
  isProcessing: boolean;
}

const CaptureButton: React.FC<CaptureButtonProps> = ({ onClick, isProcessing }) => {
  return (
    <motion.button
      className="relative flex items-center justify-center px-6 py-3 mt-6 text-base font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600"
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
      onClick={onClick}
      disabled={isProcessing}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay: 0.6 
      }}
    >
      <span className="mr-2">
        {isProcessing ? (
          <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
      </span>
      {isProcessing ? 'Processing...' : 'Capture & Analyze'}
    </motion.button>
  );
};

export default CaptureButton;
