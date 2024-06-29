import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this CSS file is created

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Nine Thirteen West Logo"
          className="logo-image"
        />
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
