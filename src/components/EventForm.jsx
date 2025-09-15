import React, { useState, useEffect } from "react";
import axios from "axios";
import "./forms.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8001";

const EventForm = () => {
  const [trainings, setTrainings] = useState([]);
  const [trainingId, setTrainingId] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [program, setProgram] = useState("");
  const [status, setStatus] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [iconKey, setIconKey] = useState("");

  // Dropdown options
  const typeOptions = ["Workshop", "Seminar", "Conference", "Webinar"];
  const statusOptions = ["upcoming", "ongoing", "completed"];
  const iconOptions = [
    { value: "financial", label: "Financial" },
    { value: "ai", label: "AI / Technology" },
    { value: "hr", label: "Human Resources" },
    { value: "risk", label: "Risk Management" },
    { value: "enterprise", label: "Enterprise / Business" },
  ];

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/trainings`);
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

  const resetForm = () => {
    setTrainingId("");
    setEventDate("");
    setLocation("");
    setType("");
    setProgram("");
    setStatus("");
    setIsFeatured(false);
    setIconKey("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/events`, {
        training_id: trainingId,
        event_date: eventDate,
        location,
        type,
        program,
        status,
        is_featured: isFeatured ? 1 : 0,
        icon_key: iconKey,
      });
      alert("✅ Event created successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create event.");
    }
  };

  return (
    <div className="landscape-form-container">
      <div className="form-header">
        <h2>Create Upcoming Event</h2>
        <p>Schedule and manage your upcoming events</p>
      </div>

      <form onSubmit={handleSubmit} className="landscape-form">
        {/* Row 1 */}
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

        {/* Row 2 */}
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
            <label>Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">-- Select Type --</option>
              {typeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group">
            <label>Program</label>
            <input
              type="text"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              placeholder="e.g. Leadership Excellence"
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">-- Select Status --</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="form-row">
          <div className="form-group">
            <label>Icon</label>
            <select
              value={iconKey}
              onChange={(e) => setIconKey(e.target.value)}
              required
            >
              <option value="">-- Choose Icon --</option>
              {iconOptions.map((icon) => (
                <option key={icon.value} value={icon.value}>
                  {icon.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group checkbox-group">
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

        {/* Submit */}
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
