import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 👈 import router hook
import "./forms.css"; // your existing styles

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
  });

  const navigate = useNavigate();

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (isSignUp) {
      // signup → default role ordinary_user
      await axios.post("http://localhost:8001/api/signup", {
        ...formData,
        role: "ordinary_user",
      });
      alert("Signup successful! Please login.");
      setIsSignUp(false);
    } else {
      // login
      const res = await axios.post("http://localhost:8001/api/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login response:", res.data); // 🔍 debug

      const { user, token } = res.data; // ✅ role is inside user object
      const { role } = user;

      // (optional) Save token & user for session persistence
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (role === "admin") {
        navigate("/admin", { replace: true }); // ✅ redirect admin
      } else {
        navigate("/", { replace: true }); // ✅ normal user
      }
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};


  return (
    <div className="form-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Telephone</label>
              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </>
        )}

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

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>

      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          style={{ color: "#4f46e5", cursor: "pointer", fontWeight: "600" }}
          onClick={toggleForm}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
