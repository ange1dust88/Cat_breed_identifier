import tensorflow as tf
import numpy as np
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt
import os

MODEL = tf.keras.models.load_model("../api/2.keras")

CLASS_NAMES = [
    "Abyssinian", "Bengal", "Birman", "Bombay", 
    "British_Shorthair", "Egyptian_Mau", "Maine_Coon", 
    "Persian", "Ragdoll", "Russian_blue", "Siamese", 
    "Sphynx"
]

dataset = tf.keras.preprocessing.image_dataset_from_directory(
    './Cats',  
    image_size=(224, 224),
    batch_size=32,
    label_mode='int',  
    shuffle=False  
)

predicted_labels = []
true_labels = []

for images, labels in dataset:
    predictions = MODEL.predict(images)
    predicted_labels.extend(np.argmax(predictions, axis=1))
    true_labels.extend(labels.numpy())

cm = confusion_matrix(true_labels, predicted_labels, labels=range(len(CLASS_NAMES)))

disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=CLASS_NAMES)
disp.plot(cmap=plt.cm.Blues, xticks_rotation='vertical')
plt.title("Confusion Matrix")
plt.show()
