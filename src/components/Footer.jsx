import React, { useState } from 'react';
import AuthForm from './AuthForm';
import "./footer.css";

const Footer = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>phRMC</h3>
              <p>Institute for Management Innovation, Capacity Building and Development</p>
              <p>Empowering excellence through innovation and professional development.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#training">Training Programs</a></li>
                <li><a href="#corporate">Corporate Services</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Training Programs</h4>
              <ul>
                <li>Financial Leadership</li>
                <li>AI & Data Analytics</li>
                <li>HR Management</li>
                <li>Risk Management</li>
                <li>Retirement Planning</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>📧 info@premierhubrmc.com</p>
                <p>📞 +254  722 655 902</p>
                <p>📍 Nairobi, Kenya</p>

                {/* Staff Portal Trigger */}
                <p 
                  style={{ cursor: "pointer", color: "red", fontWeight: "600" }}
                  onClick={() => setShowAuth(true)}
                >
                  🚫 Staff Portal
                </p>
              </div>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Facebook">Facebook</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 phRMC. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      {showAuth && (
        <div className="modal-overlay" onClick={() => setShowAuth(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span 
              className="modal-close" 
              onClick={() => setShowAuth(false)}
              role="button"
              aria-label="Close modal"
            >
              ✖
            </span>

            <AuthForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
