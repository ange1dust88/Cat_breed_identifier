import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import '../style/learnmore.css';
import Header from './Header';
import {motion} from 'framer-motion';

function LearnMore() {
  const { breed } = useParams(); 
  const cat_API = 'live_a0x5fv3V1dl9nwMdEJjGoY4U5YuelPXpsz6pX1QSkChZypL2iLeoiFck4uV88LWQ';
  const [breedInfo, setBreedInfo] = useState<any>(null);
  const [breedImages, setBreedImages] = useState<string[]>([]); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBreedInfo = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds/search', {
          params: { q: breed }, 
          headers: {
            'x-api-key': cat_API,
          },
        });
        if (response.data.length > 0) {
          const breedData = response.data[0];
          setBreedInfo(breedData);

          const imagesResponse = await axios.get('https://api.thecatapi.com/v1/images/search', {
            params: { breed_id: breedData.id, limit: 3 }, 
            headers: {
              'x-api-key': cat_API,
            },
          });

          setBreedImages(imagesResponse.data.map((img: any) => img.url)); 
          console.log('set  img ');
        } else {
          setError('Breed information not found.');
        }
      } catch (error: any) {
        setError('Failed to fetch breed information.');
      }
    };

    fetchBreedInfo();
  }, [breed]);

  return (
    <motion.div 
      className='learnmore'
      initial={{ x: '-100vw' }}  
      animate={{ x: 0 }}        
      exit={{ x: '100vw' }}      
      transition={{ duration: 0.4}}
    >
      <Header />
      <div className='learnmore__content'>
        {error && <p className="error">{error}</p>}
        {breedInfo ? (
          <div className="breed__info">
            <h2>{breedInfo.name}</h2>
            <p><strong>Origin:</strong> {breedInfo.origin}</p>
            <p><strong>Description:</strong> {breedInfo.description}</p>
            <p><strong>Temperament:</strong> {breedInfo.temperament}</p>
            <p><strong>Lifespan:</strong> {breedInfo.life_span} years</p>
            <p><strong>Weight:</strong> {breedInfo.weight.metric} kg</p>
            {breedInfo.wikipedia_url && (
              <p>
                <a href={breedInfo.wikipedia_url} target="_blank" rel="noopener noreferrer" className ='learnmore__link'>
                  Learn more on Wikipedia
                </a>
              </p>
            )}

            <div className="breed__images">
              {breedImages.map((image, index) => (
                <img key={index} src={image} alt={breedInfo.name} className="breed__image" />
              ))}
            </div>
          </div>
        ) : (
          !error && <p>Loading breed information...</p>
        )}
      </div>
    </motion.div>
  );
}

export default LearnMore;
