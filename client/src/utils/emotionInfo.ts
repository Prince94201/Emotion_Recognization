
import { EmotionQuote, EmotionFact } from '@/lib/types';

export const emotionQuotes: Record<string, EmotionQuote[]> = {
  'Happy': [
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "The most wasted of all days is one without laughter.", author: "E. E. Cummings" },
    { quote: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" }
  ],
  'Sad': [
    { quote: "The good life is not one immune to sadness but one in which suffering contributes to our development.", author: "Alain de Botton" },
    { quote: "Tears are words that need to be written.", author: "Paulo Coelho" },
    { quote: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel.", author: "Tupac Shakur" }
  ],
  'Angry': [
    { quote: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.", author: "Mark Twain" },
    { quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.", author: "Ralph Waldo Emerson" },
    { quote: "Anger is like a storm rising up from the bottom of your consciousness. When you feel it coming, turn your focus to your breath.", author: "Thich Nhat Hanh" }
  ],
  'Surprise': [
    { quote: "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us.", author: "Ashley Montagu" },
    { quote: "Surprise is the greatest gift which life can grant us.", author: "Boris Pasternak" },
    { quote: "Life is full of surprises and serendipity. Being open to unexpected turns in the road is an important part of success.", author: "Condoleezza Rice" }
  ],
  'Neutral': [
    { quote: "Neutrality helps the oppressor, never the victim.", author: "Elie Wiesel" },
    { quote: "The hottest places in hell are reserved for those who, in times of great moral crisis, maintain their neutrality.", author: "Dante Alighieri" },
    { quote: "Sometimes the middle of the road is the most dangerous place to be.", author: "Anonymous" }
  ],
  'Fear': [
    { quote: "Fear is only as deep as the mind allows.", author: "Japanese Proverb" },
    { quote: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell" },
    { quote: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" }
  ],
  'Disgust': [
    { quote: "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.", author: "Pearl S. Buck" },
    { quote: "The only way to get rid of disgust is to recognize what it teaches us about ourselves.", author: "Anonymous" },
    { quote: "What disgusts us in others often reveals something about ourselves.", author: "Anonymous" }
  ]
};

export const emotionFacts: Record<string, EmotionFact[]> = {
  'Happy': [
    { fact: "Smiling can improve your mood, even when you're feeling sad." },
    { fact: "The brain releases dopamine, oxytocin, and serotonin when you're happy." },
    { fact: "Happy people tend to have stronger immune systems." }
  ],
  'Sad': [
    { fact: "Crying can actually help to release stress hormones from your body." },
    { fact: "Sadness typically lasts 120 times longer than other emotions." },
    { fact: "About 15% of people with depression experience seasonal patterns." }
  ],
  'Angry': [
    { fact: "Anger triggers the body's 'fight or flight' response, raising your blood pressure and heart rate." },
    { fact: "Women and men experience anger with the same frequency, but express it differently." },
    { fact: "Anger can actually be beneficial when it motivates people to find solutions to problems." }
  ],
  'Surprise': [
    { fact: "The emotion of surprise typically lasts for only a few seconds." },
    { fact: "Surprise is the briefest of all emotions and is a neutral state." },
    { fact: "Your pupils dilate when you experience surprise." }
  ],
  'Neutral': [
    { fact: "A neutral facial expression uses fewer muscles than any emotional expression." },
    { fact: "Neutral expressions are often misinterpreted as negative in some cultures." },
    { fact: "The brain is still active in processing information even during neutral emotional states." }
  ],
  'Fear': [
    { fact: "Fear can be contagious – you can 'catch' fear from others through facial expressions." },
    { fact: "The amygdala processes fear, which is why we remember fearful events better." },
    { fact: "Your brain cannot distinguish between real and imagined threats when experiencing fear." }
  ],
  'Disgust': [
    { fact: "Disgust evolved to help humans avoid harmful substances or pathogens." },
    { fact: "The facial expression of disgust is the same across cultures worldwide." },
    { fact: "Disgust sensitivity decreases with age – older adults are less easily disgusted." }
  ]
};

export const getRandomQuote = (emotion: string): EmotionQuote => {
  const normalizedEmotion = emotion.charAt(0).toUpperCase() + emotion.slice(1).toLowerCase();
  const quotes = emotionQuotes[normalizedEmotion] || emotionQuotes['Neutral'];
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const getRandomFact = (emotion: string): EmotionFact => {
  const normalizedEmotion = emotion.charAt(0).toUpperCase() + emotion.slice(1).toLowerCase();
  const facts = emotionFacts[normalizedEmotion] || emotionFacts['Neutral'];
  return facts[Math.floor(Math.random() * facts.length)];
};
