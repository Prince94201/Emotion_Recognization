
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EmotionType } from '@/lib/types';
import { getRandomQuote, getRandomFact } from '@/utils/emotionInfo';

interface EmotionInsightProps {
  emotion: EmotionType | '';
}

const EmotionInsight: React.FC<EmotionInsightProps> = ({ emotion }) => {
  const [showQuote, setShowQuote] = useState(true);
  const [insight, setInsight] = useState({ 
    quote: '', 
    author: '', 
    fact: '' 
  });

  useEffect(() => {
    if (emotion) {
      const quote = getRandomQuote(emotion);
      const fact = getRandomFact(emotion);
      
      setInsight({
        quote: quote.quote,
        author: quote.author || '',
        fact: fact.fact
      });
    }
  }, [emotion]);

  if (!emotion) return null;

  return (
    <motion.div
      className="mt-6 p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: 0.2,
        ease: [0.19, 1, 0.22, 1]
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {emotion} Insight
        </h3>
        <div className="flex gap-2">
          <motion.button
            className={`text-xs px-3 py-1 rounded-full ${showQuote ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowQuote(true)}
          >
            Quote
          </motion.button>
          <motion.button
            className={`text-xs px-3 py-1 rounded-full ${!showQuote ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowQuote(false)}
          >
            Fun Fact
          </motion.button>
        </div>
      </div>

      <motion.div
        key={showQuote ? 'quote' : 'fact'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="p-3 rounded-lg bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20"
      >
        {showQuote ? (
          <div className="quote">
            <p className="italic text-gray-700 dark:text-gray-300">"{insight.quote}"</p>
            {insight.author && <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-2">— {insight.author}</p>}
          </div>
        ) : (
          <div className="fact">
            <p className="text-gray-700 dark:text-gray-300">{insight.fact}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EmotionInsight;
