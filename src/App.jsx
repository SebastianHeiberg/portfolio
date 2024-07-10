import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';

function App() {
    return (
        <Router>
            <div className='App flex flex-col min-h-screen justify-between bg-custom-navy '>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;