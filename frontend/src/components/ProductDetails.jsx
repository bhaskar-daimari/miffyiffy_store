import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product)
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
          <h2 style={{ color: "#e91e63" }}>Product not found.</h2>
        </div>
      </div>
    );

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
        <h2 style={{ color: "#e91e63", marginBottom: "1rem" }}>{product.name}</h2>
        <p style={{ color: "#4b5563" }}>Category: {product.category}</p>
        <p style={{ color: "#4b5563" }}>Price: ₹{product.price}</p>
        {/* Add more product details here if needed */}
      </div>
    </div>
  );
};

export default ProductDetails;