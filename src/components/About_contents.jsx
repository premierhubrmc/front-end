import React from 'react'

const About_content = () => {
  const services = [
    {
      title: "Our Expertise",
      description: `We assist organizations set up systems to effectively identify, analyze, evaluate 
      and mitigate tangible and intangible operational and strategic risks in a consistent and 
      systemic manner across all their operations through five main strategies:`,
      strategies: [
        { heading: `Systematic reviews of organisation risk management and strategic management systems to identify 
                    operational challenges and opportunities for enhancement;`},
        { heading: `Automating and integrating the process of capturing inherent, residual and target risks, and other mission 
                critical activities`},
        { heading: `Establishing Key Risk Indicators - KRIs to provide an early warning and rapid detection systems for all high 
                impact risks`},
        { heading: `Developing Institutional Risk Management Policy Frameworks – IRMPF, Business Continuity Plans and 
            Business Resilience Strategies; and` },
        { heading: `Skilling risk managers to adapt, communicate effectively and work collaboratively in diverse environments.` }
      ]
    },
    {
      title: "Our Approach",     
      strategies: [
        { heading: "Step 1: Determining Risk Maturity", desc: `We work with clients to determine the organisation’s risk management maturity. The risk maturity analysis 
        helps us to assist organizations bridge the gap and mature their risk management processes.` },
        { heading: "Step 2: Skills Gap Analysis", desc: `We conduct organisation and staff risk management skills gap analysis utilizing a range of practical 
            assessment tools, to identify the critical and noncritical risk management skills needed to carry out risk 
            management role effectively.` },
        { heading: "Step 3: Developing Customised Risk Management Solutions", desc: `We develop risk management solutions that allow organizations to evaluate effectiveness of their risk 
        management and business continuity programs.` },
        { heading: "Step 4: Implementing the solution", desc: `We work with our clients to implement the agreed risk management or business continuity solution and change 
        initiatives.` },
        { heading: "Step 5: Post Training Support", desc:`We offer continuous implementation support, coaching and feedback to guarantee success. Follow-up sessions 
        are available to focus on continuing improvement and ensure that client staff skills are consistently enhanced.` }
      ],
     
    },
   {
  title: "Why choose Premier Hub",
  strategies: [
    { 
      heading:"We link you to an ever-growing pool of",  desc: `Our Enterprise Risk Management skills development programmes adapt to the 
      current rapid technological advancement and evolving industry demands, ensuring 
      your risk management teams gain relevant, future-ready qualifications.`
      
    }, 
  ],
  icon: "/images/why-choose-us.png"
}

  ]

  return (
    <section id="about-content" className="corporate">
      <div className="container">
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="about-card">
              
             
              
              {service.title && <h1 className='about-content-tittle'>{service.title}</h1>}
              {service.description && <p>{service.description}</p>}
                 
              {service.strategies && (
                service.strategies.length === 1 && !service.strategies[0].desc
                  ? (
                      // ✅ Render as plain paragraph if it's just one long narrative
                      <p className="text-gray-700">{service.strategies[0].heading}</p>
                    )
                  : (
                      // ✅ Otherwise render as bullet list
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {service.strategies.map((item, i) => (
                        <li key={i}>
                        <span className="strategy-heading">{item.heading || item}</span>

                          {service.icon && (
                <div className="service-icon">
                  <img 
                    src={service.icon} 
                    alt={`${service.title || "Service"} icon`} 
                    className="icon-img"
                  />
                </div>
              )}
                        {item.desc && (
                            <p className="strategy-desc">{item.desc}</p>
                        )}
                        </li>
                    ))}
                    </ul>

                    )
              )}

              {(service.description || service.strategies) && (
                <button className="btn btn-text">Learn More →</button>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About_content
