
export interface EmotionResponse {
  predicted_emotion: string;
  confidence_scores?: {
    [key: string]: string;
  };
}

export type EmotionType = 'Happy' | 'Sad' | 'Angry' | 'Surprise' | 'Neutral' | 'Fear' | 'Disgust' | string;

export interface EmotionQuote {
  quote: string;
  author?: string;
}

export interface EmotionFact {
  fact: string;
}
