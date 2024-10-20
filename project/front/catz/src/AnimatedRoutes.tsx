import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import Prediction from './components/Prediction';
import Contact from './components/Contact';
import LearnMore from './components/LearnMore';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}> 
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learnmore/:breed" element={<LearnMore />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
