import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Training from './components/Training';
import Corporate from './components/Corporate';
import Events from './components/Events';
import Footer from './components/Footer';

import AdminPage from './components/AdminPage'; // new admin dashboard

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />      
      <Training />
      <Corporate />
     { /*<Events />*/  }   
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
