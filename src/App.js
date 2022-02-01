import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Menu/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MemoryGame from './components/MemoryGame/MemoryGame';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Instructions from './components/Instructions/Instructions';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="PageContainer">
        <NavBar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<MemoryGame />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App