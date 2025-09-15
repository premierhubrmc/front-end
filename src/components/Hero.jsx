import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Banknote, Cpu, Users, ShieldCheck, Briefcase } from "lucide-react";

// Icons remain unchanged
const iconMap = {
  financial: Banknote,
  ai: Cpu,
  hr: Users,
  risk: ShieldCheck,
  enterprise: Briefcase,
};

// Brand colors
const colors = ["#DF3621", "#FD9E01", "#00B09B", "#FF33CC", "#0099FF"];

const Hero = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/events");
        // ⬆️ replace with your actual backend URL e.g. https://api.premierhub.com/api/events
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();

        // ✅ Only keep featured events
        const featuredEvents = Array.isArray(data)
          ? data.filter((ev) => ev.is_featured)
          : [];

        setEvents(featuredEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
      </div>

      {/* Right: upcoming events */}
      <div className="hero-events">
        <div className="phone-img">
          <img
            src="/images/upcoming-events.png"
            alt="Upcoming Event"
            className="upcoming-img"
          />
        </div>

        <div className="hero-content">
          {!error && <p className="upcoming-p">"Upcoming Trainings"</p>}

          {loading && <p>Loading events...</p>}
          {error && <p style={{ color: "red" }}>{"No Upcoming Events yet"}</p>}

          {!loading && !error && events.length > 0 && (
            <ul className="upcoming-list">
              {events.map((ev, index) => {
                const Icon = iconMap[ev.icon_key]; // <-- use DB-provided icon_key
                return (
                  <li
                    key={ev.id}
                    className="upcoming-item"
                    style={{
                      backgroundColor: colors[index % colors.length],
                    }}
                    role="button"
                    tabIndex={0}
                    onClick={() => window.open(ev.pdf_url, "_blank")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.open(ev.pdf_url, "_blank");
                      }
                    }}
                  >
                    <span>{ev.title}</span>
                    {Icon && (
                      <span className="icon-wrapper">
                        <Icon className="w-5 h-5 text-black" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {!loading && !error && events.length === 0 && (
            <p style={{ textAlign: "center" }}>No featured events available.</p>
          )}

          {!error && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
