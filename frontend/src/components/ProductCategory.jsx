import React from "react";
import products from "../data/products.json";

const Categories = () => {
  // Example: group products by category
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Categories</h2>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h3>{category}</h3>
          <ul>
            {products
              .filter(p => p.category === category)
              .map(p => (
                <li key={p.id}>
                  {p.name} - ₹{p.price}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categories;