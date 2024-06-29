import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to</h1>
          <h1>Nine Thirteen West</h1>
          <p>
            Empowering non-profits and small businesses with innovative
            consultancy services that bridge the gap between dreams and reality.
          </p>
          <Link to="/services">
            <button className="hero-button">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
