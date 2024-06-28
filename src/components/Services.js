import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";

const Home = () => {
  return (
    <div className="home">
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <Link to="/program-management" className="service-card">
            <h3>Program and Project Management</h3>
            <p>Expertise in fostering vibrant and connected communities.</p>
          </Link>
          <Link to="/community-building" className="service-card">
            <h3>Community Building</h3>
            <p>Expertise in fostering vibrant and connected communities.</p>
          </Link>
          <Link to="/event-management" className="service-card">
            <h3>Event Management</h3>
            <p>Seamless in-person and online event planning and execution.</p>
          </Link>
          <Link to="/website-design" className="service-card">
            <h3>Website Design</h3>
            <p>
              Beautiful and functional website designs tailored to your needs.
            </p>
          </Link>
          <Link to="/social-media" className="service-card">
            <h3>Social Media Content</h3>
            <p>Engaging content creation for your social media platforms.</p>
          </Link>
          <Link to="/staff-training" className="service-card">
            <h3>Staff Training & Development</h3>
            <p>Expertise in fostering vibrant and connected communities.</p>
          </Link>
          <Link to="/technology-systems" className="service-card">
            <h3>Technology & Information Systems</h3>
            <p>Expertise in fostering vibrant and connected communities.</p>
          </Link>
        </div>
      </div>
      <Gallery1 />
      <Gallery2 />
    </div>
  );
};

export default Home;
