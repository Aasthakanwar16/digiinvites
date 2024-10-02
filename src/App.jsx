import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Weddings from './Components/Weddings/Weddings';
import Gallery from './Components/Gallery/Gallery';
import Birthday from './Components/Birthday/Birthday';
import Footer from './Components/Footer/Footer';

// Component to conditionally render Gallery hide krn k liy use liy h
const ConditionalGallery = () => {
  const location = useLocation();
  
  // Show Gallery only  home page p hi 
  return location.pathname === '/' ? <Gallery /> : null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
      <ConditionalGallery /> {/* Conditionally render Gallery */}
      <Footer/>
    </Router>
  );
}

export default App;
