import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Logged in successfully!");
        setMessageType("success");
        setTimeout(() => navigate("/"), 1200); // Redirect to home after 1.2s
      } else {
        setMessage(data.msg || "Signin failed!");
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
            <p className="brand-subtitle">sign in to your account</p>
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
            </div>
            <button type="submit" className="submit-button">
              Sign in
            </button>
            <div className="signin-link">
              <p className="signin-text">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="signin-button"
                  onClick={() => navigate("/signup")}
                >
                  Create account
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

export default Login;