import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio.jsx';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
    return (
        <Router>
            <div className='App flex flex-col h-screen justify-between bg-gray-200 '>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;