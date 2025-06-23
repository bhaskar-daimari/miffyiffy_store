import React from "react";

const Checkout = () => (
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
      <h1 style={{ color: "#e91e63", marginBottom: "1rem" }}>Checkout</h1>
      <p style={{ color: "#4b5563" }}>This is the checkout page placeholder.</p>
    </div>
  </div>
);

export default Checkout;