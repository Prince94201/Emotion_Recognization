
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface EmotionConfidenceProps {
  scores: Record<string, string> | undefined;
}

const colorMap: Record<string, string> = {
  'Happy': '#FFD700',  // Gold
  'Sad': '#6495ED',    // Cornflower blue
  'Angry': '#FF6347',  // Tomato
  'Surprise': '#DA70D6', // Orchid
  'Neutral': '#A9A9A9', // Dark gray
  'Fear': '#8A2BE2',   // Blue violet
  'Disgust': '#32CD32'  // Lime green
};

const EmotionConfidence: React.FC<EmotionConfidenceProps> = ({ scores }) => {
  if (!scores) return null;

  const data = Object.entries(scores).map(([emotion, score]) => ({
    emotion,
    score: parseFloat(score.replace('%', ''))
  })).sort((a, b) => b.score - a.score);

  return (
    <motion.div
      className="mt-6 p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: 0.3,
        ease: [0.19, 1, 0.22, 1]
      }}
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
        Confidence Scores
      </h3>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 10, left: 50, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <YAxis type="category" dataKey="emotion" width={70} />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(2)}%`, 'Confidence']}
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}
            />
            <Bar dataKey="score" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colorMap[entry.emotion] || '#8884d8'} 
                  fillOpacity={0.8}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default EmotionConfidence;
