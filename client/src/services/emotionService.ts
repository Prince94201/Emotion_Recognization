
import axios from 'axios';
import { EmotionResponse } from '@/lib/types';

const API_URL = 'http://localhost:5001/predict';

export const predictEmotion = async (imageBlob: Blob): Promise<EmotionResponse> => {
  try {
    const formData = new FormData();
    formData.append('image', imageBlob, 'webcam.jpg');

    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error predicting emotion:', error);
    // Return a default value if the API is not available
    return { 
      predicted_emotion: 'API unavailable',
      confidence_scores: {
        'API': '100%',
        'Error': '0%'
      }
    };
  }
};
