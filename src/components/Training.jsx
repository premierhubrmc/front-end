import React from 'react'

const Training = () => {
  const programs = [
    {
      id: 1,
      title: "Financial Leadership and Governance Excellence",
      description: "Master financial strategy, governance frameworks, and leadership principles for sustainable organizational growth.",
      
     
      image: "/images/finance.jpg"
    },
    {
      id: 2,
      title: "AI Predictive Analysis and Data-Driven Decision Making",
      description: "Harness the power of artificial intelligence and data analytics to make informed strategic decisions.",
      
      
      image: "/images/ai.jpg"
    },
    {
      id: 3,
      title: "Human Resource Administrative Management and Performance Management",
      description: "Develop comprehensive HR strategies, administrative excellence, and performance optimization systems.",
     
      
      image: "/images/hr.jpg"
    },
    {
      id: 4,
      title: "Strategic Enterprise Risk Management and Compliance",
      description: "Build robust risk management frameworks and ensure regulatory compliance across your organization.",
      
      
      image: "/images/risk.jpg"
    },
    {
      id: 5,
      title: "Retirement Planning and Self Empowerment",
      description: "Create comprehensive retirement strategies and develop personal empowerment skills for long-term success.",
     
      
      image: "/images/retirement.jpg"
    }
    

  ]

  return (
    <section id="training" className="training">
      <div className="container">
        <div className="section-header">
          <h2>Training Programs</h2>
          <p>At Premier Hub you will access world class training that equips and skills you to run:</p>
        </div>
        
        <div className="programs-grid">
          {programs.map(program => (
            <div key={program.id} className="program-card">
              <div className="program-image">
                <img src={program.image} alt={program.title} />
               
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>

                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Training