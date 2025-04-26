from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import cv2
from PIL import Image
import io
import base64

app = Flask(__name__)
CORS(app)  # Allow all origins

# Load the trained model
model = tf.keras.models.load_model('emotion_model.h5')
labels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise']

def preprocess_image(image_bytes):
    """Preprocess image: Convert to grayscale, resize to (48,48), normalize."""
    image = Image.open(io.BytesIO(image_bytes)).convert('L')
    image = image.resize((48, 48))
    image_array = np.array(image)

    # Compute contrast (standard deviation of pixel values)
    contrast = np.std(image_array)

    # Apply Canny Edge Detection
    edges = cv2.Canny(image_array, 100, 200)

    # Encode edges as base64 for returning to frontend
    _, buffer = cv2.imencode('.png', edges)
    edge_image_base64 = base64.b64encode(buffer).decode('utf-8')

    # Normalize image for model
    image_array = image_array / 255.0
    image_array = np.expand_dims(image_array, axis=(0, -1))

    return image_array, contrast, edge_image_base64

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    image_file = request.files['image']
    image_bytes = image_file.read()
    
    input_tensor, contrast, edge_image_base64 = preprocess_image(image_bytes)
    
    # Get prediction probabilities
    prediction = model.predict(input_tensor)[0]  # First result from batch
    
    # Get the predicted emotion
    emotion_index = np.argmax(prediction)
    predicted_emotion = labels[emotion_index]
    
    # Convert probabilities to percentages
    confidence_scores = {labels[i]: f"{prediction[i] * 100:.2f}%" for i in range(len(prediction))}
    
    # Return response with predicted emotion, confidence scores, contrast, and edge image
    response = {
        'predicted_emotion': predicted_emotion,
        'confidence_scores': confidence_scores,
        'contrast': f"{contrast:.2f}",
        'edge_image': edge_image_base64  # Base64 encoded image
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
