import React from "react";
import "./Hero.css"
import { Banknote, Cpu, Users, ShieldCheck, Briefcase } from "lucide-react";




const iconMap = {
  financial: Banknote,
  ai: Cpu,
  hr: Users,
  risk: ShieldCheck,
  retirement: Briefcase,
};

const events = [
  { id: "financial", label: "Financial Leadership & Governance Excellence" },
  {
    id: "ai",
    label:
      "Artificial Intelligence, Predictive Analytics & Data Driven Decision Making",
  },
  {
    id: "hr",
    label:
      "Human Resource, Administrative Management & Performance Management",
  },
  {
    id: "risk",
    label: "Strategic Enterprise Risk Management & Compliance",
  },
  { id: "retirement", label: "Retirement Planning & Self Empowerment" },
];

// Brand colors
const colors = ["#DF3621", "#FD9E01", "#00B09B", "#FF33CC", "#0099FF"]; 
const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      {/* Left: main hero content */}
      <div className="hero-content">
        <div className="hero-subtitle">
          <p>"Your Integrated Risk "</p>
          <p>"Management Partner"</p>
        </div>

        <p className="hero-desc">
          Premier Hub for Risk Management & Compliance - PhRMC is driving and
          coordinating the implementation of effective Risk Management in all
          organizations.
        </p>
        <div className="hero-buttons">

          
        </div>
      </div>

      {/* Right: upcoming events image + list */}
      <div className="hero-events">
        <div className="phone-img">
          <img
            src="/images/upcoming-events.png"
            alt="Upcoming Event"
            className="upcoming-img"
          />
        </div>

        <div className="hero-content">
          <p className="upcoming-p">Upcoming Tranings</p>
              <ul className="upcoming-list">
                    {events.map((ev, index) => {
                      const Icon = iconMap[ev.id]; // pick icon based on event id
                                      return (
                                  <li
                  key={ev.id}
                  className="upcoming-item"
                  style={{ backgroundColor: colors[index % colors.length] }}
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection(ev.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      scrollToSection(ev.id);
                    }
                  }}
                >
                  <span>{ev.label}</span>
                  {Icon && (
                    <span className="icon-wrapper">
                      <Icon className="w-5 h-5 text-black" />
                    </span>
                  )}
                </li>


                                      );
                                    })}
                              </ul>
                                        <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById("training")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Programs
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
