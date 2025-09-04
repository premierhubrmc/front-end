import React, { useState } from 'react'
import "./Header.css"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="./logo.svg" alt="PhRMC Logo" />
            <div className="brand-title">
              <span className="line">
                Premier <span className="hub">HUB</span> <span className='logo_small_text'>for</span>
              </span>
              <span className="line">Risk Management &</span>
              <span className="line">Compliance</span>
            </div>

        </div>
        <div className='header-right'>
                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About Us</button>
          <button onClick={() => scrollToSection('training')}>Training Programs</button>
          <button onClick={() => scrollToSection('corporate')}>Corporate Services</button>
          <button onClick={() => scrollToSection('events')}>Events</button>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
        

      </div>
    </header>
  )
}

export default Header