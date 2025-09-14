import React from "react";
import "./corporate.css";

const Corporate = () => {
  return (
    <section id="corporate" className="corporate">
      <div className="container">
        <div className="corporate-cards">
          {/* Card 1 */}
          <div className="corporate-card">
            <h2>Corporate Services</h2>
            <p>
              We strengthen organization risk management using tailored resources.
            </p>
            <p>
              Such as individual organization-wide certifications, customized
              training, and strategic risk management conferences.
            </p>
            <p>
              We equip working risk managers and professionals with practical tools
              necessary to manage current and emerging risks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="corporate-card">
            <h2>Our Commitment</h2>
            <p>
              PhRMC is committed to integrating high-quality risk management and
              business continuity management principles into daily operations.
            </p>
            <p>
              We help organizations meet evolving challenges across different sectors.
            </p>
            <p>
              We provide customized risk management certification training for all
              working professionals and employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
