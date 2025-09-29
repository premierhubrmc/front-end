import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // scroll helper: accepts section id and optional scroll options
  const scrollToSection = (sectionId, options = { block: "start" }) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", ...options });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = {
    about: [
      "Our Vision",
      "Our Mission",
      "Our Expertise",
      "Our Approach",
      "Why Choose Premier Hub",
    ],
    training: [
      "Financial Leadership Excellence Workshop",
      "AI & Data Analytics Summit",
      "HR Management Masterclass",
      "Risk Management & Compliance Conference",
      "Retirement Planning Seminar",
    ],
    corporate: ["Corporate Services", "Our Commitment"],
    events: ["Workshops", "Webinars", "Conferences"],
  };

  // items that should scroll to top of about_footer
  const aboutFooterTopItems = ["Our Expertise", "Our Approach"];

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="PhRMC Logo" />
          <div className="brand-title">
            <span className="line">
              Premier <span className="hub">HUB</span>{" "}
              <span className="logo_small_text">for</span>
            </span>
            <span className="line">Risk Management &</span>
            <span className="line">Compliance</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            {Object.keys(menuItems).map((key) => (
              <div
                key={key}
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* MAIN BUTTON: no scrolling anymore; toggles dropdown on click */}
                <button
                  type="button"
                  aria-expanded={activeDropdown === key}
                  onClick={() => setActiveDropdown((prev) => (prev === key ? null : key))}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>

                {/* DROPDOWN ITEMS: these perform scrolling when clicked */}
                {activeDropdown === key && (
                  <ul className="dropdown-menu">
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() => {
                            // About-specific rules
                            if (key === "about") {
                              if (item === "Why Choose Premier Hub") {
                                // scroll to bottom of about_footer
                                scrollToSection("about_footer", { block: "end" });
                                return;
                              }
                              if (aboutFooterTopItems.includes(item)) {
                                // scroll to top of about_footer
                                scrollToSection("about_footer");
                                return;
                              }
                              // default about items -> scroll to about
                              scrollToSection("about");
                              return;
                            }

                            // Other menus: dropdown item scrolls to parent section
                            scrollToSection(key);
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
