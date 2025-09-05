import React from "react";
import "./AboutFooter.css";

const AboutFooter = () => {
  return (
    <div>
      <section className="about-footer-section">

        {/* Our Expertise */}
        <div className="about-footer-section-card">
          <div className="a-f-heading">
            <h1>Our Expertise</h1>
          </div>
          <div className="a-f-description">
            <p>
              We assist organizations set up systems to effectively identify, analyze,
              evaluate and mitigate tangible and intangible operational and strategic
              risks in a consistent and systemic manner across all their operations
              through five main strategies:
            </p>
          </div>
            <ol className="a-f-expertise-list">
                <li>
                    Systematic reviews of organisation risk management and strategic management
                    systems to identify operational challenges and opportunities for enhancement;
                </li>
                <li>
                    Automating and integrating the process of capturing inherent, residual and
                    target risks, and other mission critical activities;
                </li>
                <li>
                    Establishing Key Risk Indicators (KRIs) to provide an early warning and rapid
                    detection system for all high impact risks;
                </li>
                <li>
                    Developing Institutional Risk Management Policy Frameworks (IRMPF),
                    Business Continuity Plans and Business Resilience Strategies; and
                </li>
                <li>
                    Skilling risk managers to adapt, communicate effectively and work collaboratively
                    in diverse environments.
                </li>
            </ol>

        </div>

        {/* Our Approach */}
        <div className="about-footer-section-card">
          <div className="a-f-heading">
            <h1>Our Approach</h1>
          </div>
          <ul className="a-f-approach-list">
            <li>
              <h2>Step 1: <span>Determining Risk Maturity</span></h2>
              <p>
                We work with clients to determine the organisation’s risk management maturity.
                The risk maturity analysis helps us assist organizations bridge the gap and
                mature their risk management processes.
              </p>
            </li>
            <li>
              <h2>Step 2: <span>Skills Gap Analysis</span></h2>
              <p>
                We conduct organisation and staff risk management skills gap analysis utilizing
                a range of practical assessment tools, to identify the critical and noncritical
                risk management skills needed to carry out risk management roles effectively.
              </p>
            </li>
            <li>
              <h2>Step 3: <span>Developing Customised Risk Management Solutions</span></h2>
              <p>
                We develop risk management solutions that allow organizations to evaluate the
                effectiveness of their risk management and business continuity programs.
              </p>
            </li>
            <li>
              <h2>Step 4: <span>Implementing the Solution</span></h2>
              <p>
                We work with our clients to implement the agreed risk management or business
                continuity solution and change initiatives.
              </p>
            </li>
            <li>
              <h2>Step 5: <span>Post Training Support</span></h2>
              <p>
                We offer continuous implementation support, coaching and feedback to guarantee
                success. Follow-up sessions are available to focus on continuous improvement
                and ensure that client staff skills are consistently enhanced.
              </p>
            </li>
          </ul>
        </div>

        {/* Why Choose Premier Hub */}
        <div className="about-footer-section-card">
          <div className="a-f-heading">
            <h1>Why Choose Premier Hub</h1>
          </div>

          <div className="a-f-image">
            <img src="./images/why-choose-us.png" alt="why choose us diagram" />
          </div>
          <h3>
            “Our Enterprise Risk Management skills development programmes adapt to the
            current rapid technological advancement and evolving industry demands, to ensure
            that your risk management teams get relevant future proof qualifications.”
          </h3>
        </div>

      </section>
    </div>
  );
};

export default AboutFooter;
