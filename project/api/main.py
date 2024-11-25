from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf


app = FastAPI()

origins = [
    "http://localhost:3000",  
    "http://localhost:5173",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

MODEL = tf.keras.models.load_model("2.keras")

CLASS_NAMES = [
    "Abyssinian", "Bengal", "Birman", "Bombay", 
    "British_Shorthair", "Egyptian_Mau", "Maine_Coon", 
    "Persian", "Ragdoll", "Russian_blue", "Siamese", 
    "Sphynx"
]

@app.get("/ping")
async def ping():
    return {"message": "Hello, I am alive"}

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = read_file_as_image(await file.read())
    
    image = tf.image.resize(image, (224, 224)) 
    img_batch = np.expand_dims(image, axis=0)  
    
    predictions = MODEL.predict(img_batch)
    
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host='localhost', port=8080)
