import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
         <div className='about-container'>
              <div className="logo">
              <img src="./logo.svg" alt="PhRMC Logo" />
                <div className="brand-title">
                  <span className="line">
                    Premier <span className="hub">HUB</span> for
                  </span>
                  <span className="line">Risk Management</span>
                  <span className="line">& Compliance</span>
                </div>
              </div>
           <h2>About Us</h2>
         </div>
          <div className="section-intro">
            <p>
              Premier hub for Risk Management & Compliance – PhRMC is driving and coordinating 
              the implementation of effective enterprise risk management and corporate continuity 
              management in all organisations by promoting….
            </p>
            <ul>
              <li>The Culture of holistic risk management learning</li>
              <li>The Skills mastery to optimize organisation risk management effort</li>
              <li>The Reach to strengthen risk management training and services</li>
            </ul>
          </div>
        </div>

        
        <div className="about-content">
          <div className="about-text">            
            <h3>Our Vision</h3>
            <p>
              Taking calculated risks
            </p>
                        <h3>Our Mission</h3>
            <p>
             Effectively managing and benefiting from enterprise risks
            </p>
            
            <div className="stats">
              <div className="stat">
                <h4>500+</h4>
                <p>Professionals Trained</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Corporate Partners</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          
            <div className="program-card">
              <div className="program-image">
                <img src="/images/risk_diagram.png" />
                <div className="program-level"><h4>Core Values</h4></div>
              </div>
              <div className="program-content">
                <h3>Our Expertise</h3>
                <p>“At phRCM, we bring expertise in training, research, and strategic consulting, 
                  helping organizations and individuals build capacity, enhance performance, and achieve sustainable growth.”</p>
                <div className="program-meta">
                  
                </div>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About