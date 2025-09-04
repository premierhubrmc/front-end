import React from 'react'

const Training = () => {
  const programs = [
    {
      id: 1,
      title: "Financial Leadership and Governance Excellence",
      description: "Master financial strategy, governance frameworks, and leadership principles for sustainable organizational growth.",
      duration: "5 Days",
      level: "Advanced",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "AI Predictive Analysis and Data-Driven Decision Making",
      description: "Harness the power of artificial intelligence and data analytics to make informed strategic decisions.",
      duration: "4 Days",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Human Resource Administrative Management and Performance Management",
      description: "Develop comprehensive HR strategies, administrative excellence, and performance optimization systems.",
      duration: "6 Days",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Strategic Enterprise Risk Management and Compliance",
      description: "Build robust risk management frameworks and ensure regulatory compliance across your organization.",
      duration: "5 Days",
      level: "Advanced",
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Retirement Planning and Self Empowerment",
      description: "Create comprehensive retirement strategies and develop personal empowerment skills for long-term success.",
      duration: "3 Days",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400"
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
                <div className="program-level">{program.level}</div>
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-meta">
                  <span className="duration">Duration: {program.duration}</span>
                </div>
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