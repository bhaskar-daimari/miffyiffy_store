import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      setMessageType("error");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Account created successfully!");
        setMessageType("success");
        setTimeout(() => navigate("/signin"), 1500); // Optional: redirect after 1.5s
      } else {
        setMessage(data.msg || "Signup failed!");
        setMessageType("error");
      }
    } catch (err) {
      setMessage("Could not connect to server.");
      setMessageType("error");
    }
  };

  return (
    <div className="signup-container">
      <div className="main-content">
        <div className="form-container">
          <div className="branding">
            <h1 className="brand-title">miffyiffy_store</h1>
            <p className="brand-subtitle">create your account</p>
          </div>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-fields">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  className="form-input"
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Create Account
            </button>
            <div className="signin-link">
              <p className="signin-text">
                Already have an account?{" "}
                <button
                  type="button"
                  className="signin-button"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </button>
              </p>
            </div>
            {message && (
              <div
                style={{
                  color: messageType === "success" ? "green" : "red",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;