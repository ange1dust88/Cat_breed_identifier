import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Prediction from './components/Prediction';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import LearnMore from './components/LearnMore';

function App() {
  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LearnMore/:breed" element={<LearnMore />} /> {/* Accept breed as a param */}
      </Routes>

      </div>
    </Router>
  );
}

export default App;
