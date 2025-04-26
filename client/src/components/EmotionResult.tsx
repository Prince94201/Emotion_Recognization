
import React from 'react';
import { motion } from 'framer-motion';
import { EmotionType } from '@/lib/types';

interface EmotionResultProps {
  emotion: EmotionType | '';
}

const getEmotionColor = (emotion: EmotionType | ''): string => {
  const normalizedEmotion = emotion.toLowerCase();
  switch(normalizedEmotion) {
    case 'happy': return 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    case 'sad': return 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    case 'angry': return 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    case 'surprise': return 'bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    case 'neutral': return 'bg-gray-50 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300';
    case 'fear': return 'bg-violet-50 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300';
    case 'disgust': return 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    default: return 'bg-slate-50 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300';
  }
};

const getEmotionIcon = (emotion: EmotionType | ''): JSX.Element => {
  const normalizedEmotion = emotion.toLowerCase();
  switch(normalizedEmotion) {
    case 'happy':
      return (
        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    case 'sad':
      return (
        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    case 'angry':
      return (
        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    case 'surprise':
      return (
        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      );
  }
};

const EmotionResult: React.FC<EmotionResultProps> = ({ emotion }) => {
  if (!emotion) return null;
  
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 30
      }}
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Detected Emotion</h3>
      <motion.div
        className={`emotion-tag px-4 py-2 rounded-full ${getEmotionColor(emotion)} inline-flex items-center`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: 0.1
        }}
      >
        {getEmotionIcon(emotion)}
        <span className="capitalize">{emotion}</span>
      </motion.div>
    </motion.div>
  );
};

export default EmotionResult;
