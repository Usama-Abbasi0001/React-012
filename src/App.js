
import './App.css';
import About from './components/About';
import Home from './components/Home';
import LOgin from './components/LOgin';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<LOgin />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
   </>
  );
}

export default App;
