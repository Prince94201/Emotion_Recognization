
import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { motion, AnimatePresence } from 'framer-motion';
import { predictEmotion } from '@/services/emotionService';
import CaptureButton from '@/components/CaptureButton';
import EmotionResult from '@/components/EmotionResult';
import EmotionInsight from '@/components/EmotionInsight';
import EmotionConfidence from '@/components/EmotionConfidence';
import { EmotionType } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';

const EmotionCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [emotion, setEmotion] = useState<EmotionType | ''>('');
  const [confidenceScores, setConfidenceScores] = useState<Record<string, string> | undefined>(undefined);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const { toast } = useToast();

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user"
  };

  const handleCapture = useCallback(async () => {
    if (!webcamRef.current) return;
    
    setIsProcessing(true);
    setIsFlashing(true);
    
    setTimeout(() => {
      setIsFlashing(false);
    }, 500);

    try {
      const imageSrc = webcamRef.current.getScreenshot();
      
      if (imageSrc) {
        const blob = await fetch(imageSrc).then((res) => res.blob());
        const result = await predictEmotion(blob);
        
        setEmotion(result.predicted_emotion);
        setConfidenceScores(result.confidence_scores);
        
        toast({
          title: "Emotion detected",
          description: `We detected: ${result.predicted_emotion}`,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error capturing and predicting emotion:', error);
      toast({
        title: "Error",
        description: "Failed to analyze emotion. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsProcessing(false);
    }
  }, [toast]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div 
        className="webcam-container relative bg-white dark:bg-gray-900 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Camera frame decoration */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-70 blur-sm z-0"></div>
        
        {/* Corner markers for visual appeal */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-blue-400 dark:border-blue-300 rounded-tl-md z-10"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-blue-400 dark:border-blue-300 rounded-tr-md z-10"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-blue-400 dark:border-blue-300 rounded-bl-md z-10"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-blue-400 dark:border-blue-300 rounded-br-md z-10"></div>
        
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="w-full h-full max-w-lg rounded-lg object-cover relative z-5"
          mirrored={true}
        />
        
        {/* Flash effect and overlay */}
        <div className={`webcam-flash ${isFlashing ? 'active' : ''} z-20`}></div>
        <div className="webcam-overlay"></div>
        
        {/* Face detection guides */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-blue-300/30 dark:border-blue-400/30 z-10 pointer-events-none"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>

      <CaptureButton onClick={handleCapture} isProcessing={isProcessing} />
      
      <AnimatePresence mode="wait">
        {emotion && <EmotionResult emotion={emotion} />}
      </AnimatePresence>
      
      {emotion && (
        <div className="w-full mt-4">
          <EmotionInsight emotion={emotion} />
          <EmotionConfidence scores={confidenceScores} />
        </div>
      )}
    </div>
  );
};

export default EmotionCapture;
