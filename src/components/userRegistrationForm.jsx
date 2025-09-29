import React, { useState, useEffect } from "react";
import "./forms.css";

const UserRegistrationForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    phone: "",
    event_id: "", // ✅ frontend uses event_id
  });

  // Prefill event_id when event is selected
  useEffect(() => {
    if (event) {
      setFormData((prev) => ({
        ...prev,
        event_id: event.training_id, // ✅ map event_id to training_id internally
      }));
    }
  }, [event]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting registration:", formData);

    try {
      const res = await fetch(
        "http://localhost:8001/api/training/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // { user_name, email, phone, event_id }
        }
      );

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        alert("Registration successful!");
        onClose();
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="landscape-form-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="form-header">
          <h2>Register for Training</h2>
          <p>Please fill in your details below to confirm your registration</p>
        </div>

        <form className="landscape-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>Training</label>
              <input
                type="text"
                value={event?.title || ""}
                readOnly
                className="readonly-input"
              />
            </div>
          </div>

          {/* Hidden event_id field */}
          <input type="hidden" name="event_id" value={formData.event_id} />

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
