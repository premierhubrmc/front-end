import React from 'react'

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Financial Leadership Excellence Workshop",
      date: "March 15-19, 2024",
      location: "Lagos, Nigeria",
      type: "Workshop",
      program: "Financial Leadership and Governance Excellence",
      status: "Registration Open"
    },
    {
      id: 2,
      title: "AI & Data Analytics Summit",
      date: "April 8-11, 2024",
      location: "Abuja, Nigeria",
      type: "Summit",
      program: "AI Predictive Analysis and Data-Driven Decision Making",
      status: "Early Bird"
    },
    {
      id: 3,
      title: "HR Management Masterclass",
      date: "May 20-25, 2024",
      location: "Accra, Ghana",
      type: "Masterclass",
      program: "Human Resource Administrative Management and Performance Management",
      status: "Registration Open"
    },
    {
      id: 4,
      title: "Risk Management & Compliance Conference",
      date: "June 10-14, 2024",
      location: "Nairobi, Kenya",
      type: "Conference",
      program: "Strategic Enterprise Risk Management and Compliance",
      status: "Coming Soon"
    },
    {
      id: 5,
      title: "Retirement Planning Seminar",
      date: "July 5-7, 2024",
      location: "Cape Town, South Africa",
      type: "Seminar",
      program: "Retirement Planning and Self Empowerment",
      status: "Registration Open"
    }
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case 'Registration Open': return 'status-open'
      case 'Early Bird': return 'status-early'
      case 'Coming Soon': return 'status-soon'
      default: return 'status-default'
    }
  }

  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>Join our upcoming training programs and professional development events</p>
        </div>
        
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <div className={`event-status ${getStatusClass(event.status)}`}>
                  {event.status}
                </div>
                <div className="event-type">{event.type}</div>
              </div>
              
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="event-program">Part of: {event.program}</p>
                <button className="btn btn-primary">Register Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="events-cta">
          <h3>PhRMC</h3>
          <p>Contact us for more informations</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events


/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./forms.css"; // assuming you want consistent styles

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/events"); 
        setEvents(res.data); // make sure backend returns an array
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "Registration Open": return "status-open";
      case "Early Bird": return "status-early";
      case "Coming Soon": return "status-soon";
      default: return "status-default";
    }
  };

  if (loading) {
    return (
      <section className="events">
        <div className="container">
          <p>Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>Join our upcoming training programs and professional development events</p>
        </div>

        <div className="events-grid">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <div className={`event-status ${getStatusClass(event.status)}`}>
                    {event.status}
                  </div>
                  <div className="event-type">{event.type}</div>
                </div>

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="event-detail">
                      <span className="detail-icon">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <span className="detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="event-program">Part of: {event.program}</p>
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            ))
          ) : (
            <p>No events available right now. Please check back later!</p>
          )}
        </div>

        <div className="events-cta">
          <h3>Don't Miss Out!</h3>
          <p>Subscribe to our newsletter to stay updated on upcoming events and training programs.</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

*/