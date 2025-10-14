import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ✅ Smooth scroll helper
  const scrollToSection = (sectionId, options = { block: "start" }) => {
    let element = document.getElementById(sectionId);

    // ✅ Handle specific PDFs (like pdf-1760255743017)
    if (!element && sectionId.startsWith("pdf-")) {
      element = document.getElementById(sectionId);
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth", ...options });
    } else {
      console.warn("No section found for:", sectionId);
    }

    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // ✅ Menu structure
  const menuItems = {
    about: [
      "About Us",
      "Our Expertise",
      "Our Approach",
      "Why Choose Premier Hub",
    ],
    training: [
      { label: "Financial Leadership & Governance Excellence", id: "pdf-1760255743017" },
      { label: "Artificial Intelligence, Predictive Analytics & Data Driven Decision Making", id: "pdf-1760255743018" },
      { label: "Human Resource, Administrative Management & Performance Management", id: "pdf-1760255743019" },
      { label: "Strategic Enterprise Risk Management & Compliance", id: "pdf-1760255743020" },
      { label: "Retirement Planning & Self Empowerment", id: "pdf-1760255743021" },
    ],
    corporate: ["Corporate Services", "Our Commitment"],
    events: ["Workshops", "Webinars", "Conferences"],
  };

  const aboutFooterTopItems = ["Our Expertise", "Our Approach"];

  // ✅ Display names for main buttons
  const displayNames = {
    about: "About Us",
    training: "Training Programs",
    corporate: "Corporate Services",
    events: "Events",
  };

  return (
    <header className="header">
      <div className="container">
        {/* ✅ Logo */}
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

        {/* ✅ Navigation */}
        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            {Object.keys(menuItems).map((key) => (
              <div
                key={key}
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* MAIN BUTTON */}
                <button
                  type="button"
                  aria-expanded={activeDropdown === key}
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === key ? null : key))
                  }
                >
                  {displayNames[key] ||
                    key.charAt(0).toUpperCase() + key.slice(1)}
                </button>

                {/* DROPDOWN MENU */}
                {activeDropdown === key && (
                  <ul className="dropdown-menu">
                    {menuItems[key].map((item, idx) => {
                      // Handle both string items (like 'About Us') and object items (with label + id)
                      const label = typeof item === "string" ? item : item.label;
                      const sectionId =
                        typeof item === "string" ? key : item.id;

                      return (
                        <li key={idx}>
                          <button
                            type="button"
                            onClick={() => {
                              if (key === "about") {
                                if (item === "Why Choose Premier Hub") {
                                  scrollToSection("about_footer", {
                                    block: "end",
                                  });
                                  return;
                                }
                                if (aboutFooterTopItems.includes(item)) {
                                  scrollToSection("about_footer");
                                  return;
                                }
                                scrollToSection("about");
                                return;
                              }

                              // ✅ Scroll to PDF sections for training
                              scrollToSection(sectionId);
                            }}
                          >
                            {label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* ✅ Mobile toggle */}
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
