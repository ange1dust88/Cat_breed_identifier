import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <div className='app'>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
