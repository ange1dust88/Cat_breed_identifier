import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import '../style/prediction.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function Prediction() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<{ class: string; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // New loading state

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    handlePrediction(file);
  };

  const handlePrediction = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    setLoading(true); // Start loading when prediction begins

    try {
      const response = await axios.post('http://localhost:8080/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
    } catch (error: any) {
      console.error('Error making prediction:', error);
      setError(`Failed to get a prediction: ${error.message}`);
    } finally {
      setLoading(false); 
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
  });

  return (
    <div className='prediction'>
      <Header />
      <div {...getRootProps({ className: 'prediction__dropzone' })}>
        <input {...getInputProps()} />
        <p>🐱 Got a picture of your kitty? Drop it here or click to let the magic happen!</p>
      </div>
      <div className="prediction__body">
        <h3 className='prediction__header'>Your cat:</h3>
        <div className="prediction__image__container">
          {selectedImage ? (
            <img src={selectedImage} className="prediction__image" alt="Selected Cat" />
          ) : (
            <img src='../public/unknown__cat.png' className="prediction__image" alt="Unknown Cat" />
          )}
        </div>
      </div>

      {loading && (
        <div className='loading'>
          <p>🔍 Calculating... Please hold on!</p>
        </div>
      )}

{!loading && prediction && (
  <div className='prediction__result'>
    <h3 className='prediction__resheader'>Our prediction:</h3>
    <p className='prediction__res'>Breed: <b>{prediction.class.replace(/_/g, ' ')}</b></p>
    <p className='prediction__res'>Confidence: <b>{(prediction.confidence * 100).toFixed(2)}%</b></p>
    <Link to={`/LearnMore/${prediction.class}`}>
      <button className='prediction__btn biege__btn'>
        Learn more about {prediction.class.replace(/_/g, ' ')}
      </button>
    </Link>
  </div>
)}

      
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Prediction;
