
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Landing: React.FC = () => {
  // Array of emotion examples with images
  const emotionExamples = [
    { emotion: "Happy", description: "Joy and contentment", color: "bg-yellow-500/80", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" },
    { emotion: "Sad", description: "Sorrow and melancholy", color: "bg-blue-500/80", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" },
    { emotion: "Surprised", description: "Astonishment and wonder", color: "bg-purple-500/80", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-no-repeat bg-cover opacity-5 dark:opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 dark:from-pink-900/20 dark:to-yellow-900/20 blur-3xl opacity-60"></div>
      </div>

      <ThemeToggle />
      
      <div className="container max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-3 py-1 mb-3 text-xs font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Emotion AI Technology
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Face Feelings <span className="text-blue-600 dark:text-blue-400">Snapshot</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl text-xl text-gray-600 dark:text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover your emotions in real-time with our advanced AI recognition technology. 
            Capture expressions and understand the feelings behind them instantly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/app">
              <motion.button 
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Emotion Examples Carousel */}
        <motion.div 
          className="my-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Experience Emotion Detection</h2>
          <Carousel>
            <CarouselContent>
              {emotionExamples.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-1 h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative h-64 rounded-xl overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={item.emotion} 
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute bottom-0 left-0 right-0 ${item.color} p-4 transition-all duration-300 backdrop-blur-sm`}>
                        <h3 className="text-white font-bold text-xl">{item.emotion}</h3>
                        <p className="text-white/90 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
        
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            {
              title: "Instant Analysis",
              description: "Our AI processes your expressions in real-time, delivering immediate emotional insights."
            },
            {
              title: "High Accuracy",
              description: "Advanced machine learning models ensure precise emotion detection across diverse faces."
            },
            {
              title: "Privacy-Focused",
              description: "Your data stays on your device. We prioritize privacy and security in every interaction."
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.footer
        className="mt-16 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p>
          Designed with precision and simplicity. <br />
          Capturing emotions in their purest form.
        </p>
      </motion.footer>
    </div>
  );
};

export default Landing;
