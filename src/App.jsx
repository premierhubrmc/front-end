import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Training from './components/Training'
import Corporate from './components/Corporate'
import Events from './components/Events'
import Footer from './components/Footer'
import AboutFooter from './components/AboutFooter'




function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />   
      <AboutFooter/>     
      <Training />
      <Corporate />
      <Events />
      <Footer />
    </div>
  )
}

export default App