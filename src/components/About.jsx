import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">     
      {/* Header part */}
      <div className="section-header">
        <div className="about-container">
          <div className="logo">
            <img src="./logo.svg" alt="PhRMC Logo" />
            <div className="brand-title">
              <span className="line">
                Premier <span className="hub">HUB</span>{" "}
                <span className='logo_small_text'>for</span>
              </span>
              <span className="line">Risk Management &</span>
              <span className="line">Compliance</span>
            </div>
          </div> 
          <div>
            <h2>About Us</h2>
          </div>           
        </div>
      </div>

      {/* ✅ This section is now separate */}
      <section className="about-content">
        <div className="about-left">
          <div className="about-description">
            <p>
            Premier hub for Risk Management & 
            Compliance – PhRMC is driving and 
            coordinating the implementation of 
            effective enterprise risk management 
            and corporate continuity 
            management in all organisations by 
            promoting…. 
          </p>
          <div className="about-list">
            <ul>
              <li> The <span>Culture</span> of holistic risk 
              management learning
              </li>
              <li> The <span>Skills</span> mastery to optimize 
              organisation risk management effort
              </li>
              <li>  The <span>Reach</span> to strengthen risk 
              management training and services
              </li>
            </ul>
          </div>
          </div>
        </div>
<div className="about-right">
  <div className="about-right-text">
    <h1>Vision</h1>
    <p>Taking Calculated Risk</p>        

    <h1>Mission</h1>
    <p>Effectively managing and benefiting from enterprise risks</p>

    <span className="line">
      At Premier <span className="hub">HUB</span> 
      <span> you will access world class training that equips and skills you to run:</span>
    </span>
  </div>

  <div className="about-right-image">
    <img src="/images/risk_diagram.png" alt="risk diagram" />
  </div>
</div>


      </section>

      
    </section>  
  )
}

export default About 