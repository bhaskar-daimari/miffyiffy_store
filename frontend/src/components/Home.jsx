import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fdf2f8"
    }}>
      <div style={{
        background: "#fff",
        padding: "2rem 3rem",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#e91e63", marginBottom: "1rem" }}>Welcome to miffyiffy_store!</h1>
        <p style={{ color: "#4b5563" }}>This is the home page placeholder.</p>
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link to="/categories" style={linkStyle}>Go to Categories</Link>
          <Link to="/product/1" style={linkStyle}>View Product Details (example)</Link>
          <Link to="/checkout" style={linkStyle}>Go to Checkout</Link>
          <Link to="/signup" style={linkStyle}>Sign Up</Link>
          <Link to="/login" style={linkStyle}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

const linkStyle = {
  color: "#e91e63",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  border: "1px solid #e91e63",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem",
  background: "#fce7f3",
  transition: "background 0.2s",
  display: "inline-block"
};

export default Home;