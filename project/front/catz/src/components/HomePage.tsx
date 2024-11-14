import '../style/homepage.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div 
      className='homepage'
      initial={{ y: '-100vh' }}  
      animate={{ y: 0 }}        
      exit={{ y: '100vh' }}      
      transition={{ duration: 0.2}}
    >
      <Header />

      <div className="homepage__img__container">
        <img src="../public/home__bg.png" className='homepage__img' alt="Homepage Background" />
      </div>

      <div className="homepage__body">
        <h1 className="homepage__title">Cat Breed Identifier</h1>
        <p className="homepage__rules">
          Do you have a furry friend at home but aren’t sure about their breed? No worries! Just upload a clear image of your cat, and we’ll do our best to identify their breed for you!<br />
          Remember, every cat is unique, and regardless of their breed, they are all full of love and purrs! 💖<br />
          So, snap a photo, and let’s uncover the mystery together!
        </p>
        <Link to="/predict" className='homepage__btns'>
          <button className="homepage__btn dark__btn">Upload</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default HomePage;
