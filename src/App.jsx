import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Training from './components/Training'
import Corporate from './components/Corporate'
import Events from './components/Events'
import Footer from './components/Footer'
import About_content from './components/About_contents'



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <About_content/>      
      <Training />
      <Corporate />
      <Events />
      <Footer />
    </div>
  )
}

export default App