import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>🌿</span> bloom
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="navbar-actions">
        <button className="nav-icon">⌕</button>
        <button className="nav-icon">♡</button>

        <Link to="/cart" className="cart-link">
          🛒
        </Link>

        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;