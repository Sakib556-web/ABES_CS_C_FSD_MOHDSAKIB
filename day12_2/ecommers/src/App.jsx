import React from "react";
import Navbar from "./component/Navbar";
import products from "./data/products";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>🛍️ Ecomars Products</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px" }} />
              <h3>{product.name}</h3>
              <p>⭐ {product.rating}</p>
              <p>
                <b>₹{product.price}</b>{" "}
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  ₹{product.oldPrice}
                </span>
              </p>
              <p style={{ color: product.inStock ? "green" : "red" }}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
