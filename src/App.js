import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
function App() {
  return <>
   <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
  
    
  </>
}
export default App;
