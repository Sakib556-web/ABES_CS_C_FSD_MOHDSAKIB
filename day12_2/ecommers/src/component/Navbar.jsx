import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ecomars</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
}

export default Navbar;
