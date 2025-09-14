import React, { useState, useEffect } from "react";
import axios from "axios";
import "./forms.css";

const EventForm = () => {
  const [trainings, setTrainings] = useState([]);
  const [trainingId, setTrainingId] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/trainings");
        if (Array.isArray(res.data)) {
          setTrainings(res.data);
        } else {
          console.warn("Unexpected response:", res.data);
          setTrainings([]);
        }
      } catch (err) {
        console.error("Failed to fetch trainings:", err);
      }
    };
    fetchTrainings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8001/api/events", {
        training_id: trainingId,
        event_date: eventDate,
        location,
        is_featured: isFeatured,
      });
      alert("Event created successfully!");
      setTrainingId("");
      setEventDate("");
      setLocation("");
      setIsFeatured(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="landscape-form-container">
      <div className="form-header">
        <h2>Create Upcoming Event</h2>
        <p>Schedule and manage your upcoming events</p>
      </div>

      <form onSubmit={handleSubmit} className="landscape-form">
        <div className="form-row">
          <div className="form-group">
            <label>Select Training</label>
            <select
              value={trainingId}
              onChange={(e) => setTrainingId(e.target.value)}
              required
            >
              <option value="">-- Choose Training --</option>
              {trainings.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={isFeatured}
                onChange={() => setIsFeatured(!isFeatured)}
              />
              Featured Event
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
