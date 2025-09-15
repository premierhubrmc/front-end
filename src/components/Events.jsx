import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Helper to format DB date
  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Registration Open":
        return "status-open";
      case "Early Bird":
        return "status-early";
      case "Coming Soon":
        return "status-soon";
      default:
        return "status-default";
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:8001/api/events");
        const data = await res.json();

        if (Array.isArray(data)) {
          setEvents(data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // ✅ Event listener for register button
  const handleRegisterClick = (id, title) => {
    console.log(`Register clicked → ID: ${id}, Title: ${title}`);
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading events...</p>;
  }

  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>
            Join our upcoming training programs and professional development
            events
          </p>
        </div>

        <div className="events-grid">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <div
                    className={`event-status ${getStatusClass(event.status)}`}
                  >
                    {event.status}
                  </div>
                  <div className="event-type">{event.type}</div>
                </div>

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="event-detail">
                      <span className="detail-icon">📅</span>
                      <span>{formatDate(event.event_date)}</span>
                    </div>
                    <div className="event-detail">
                      <span className="detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.program && (
                    <p className="event-program">Part of: {event.program}</p>
                  )}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRegisterClick(event.id, event.title)}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>
              No upcoming events available.
            </p>
          )}
        </div>

        <div className="events-cta">
          <h3>PhRMC</h3>
          <p>Contact us for more information</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
