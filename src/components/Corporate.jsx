import React from 'react'

const Corporate = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance on organizational strategy, transformation, and growth initiatives.",
      icon: "🎯"
    },
    {
      title: "Custom Training Solutions",
      description: "Tailored training programs designed specifically for your organization's needs.",
      icon: "🎓"
    },
    {
      title: "Leadership Development",
      description: "Comprehensive leadership programs to develop your management team's capabilities.",
      icon: "👥"
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through proven methodologies.",
      icon: "⚙️"
    },
    {
      title: "Change Management",
      description: "Navigate organizational change with structured approaches and expert support.",
      icon: "🔄"
    },
    {
      title: "Performance Analytics",
      description: "Data-driven insights to measure and improve organizational performance.",
      icon: "📊"
    }
  ]

  return (
    <section id="corporate" className="corporate">
      <div className="container">
        <div className="section-header">
          <h2>Corporate Services</h2>
          <p>Comprehensive solutions to transform your organization and drive sustainable growth</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn btn-text">Learn More →</button>
            </div>
          ))}
        </div>
        
        <div className="corporate-cta">
          <h3>Ready to Transform Your Organization?</h3>
          <p>Contact us today to discuss how our corporate services can help you achieve your goals.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Corporate