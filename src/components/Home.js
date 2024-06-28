import React from "react";
import { Link } from "react-router-dom"; // Make sure this import is included
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Nine Thirteen West</h1>
        <p>
          Bridging Technology, Innovation, & Community For Non-Profits and Small
          Businesses
        </p>
        <p>MISSIONAL CONSULTANCY</p>
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card">
            <h3>Community Building</h3>
            <p>Expertise in fostering vibrant and connected communities.</p>
            <Link to="/community-building">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Event Management</h3>
            <p>Seamless in-person and online event planning and execution.</p>
            <Link to="/event">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Website Design</h3>
            <p>
              Beautiful and functional website designs tailored to your needs.
            </p>
            <Link to="/website-design">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Social Media Content</h3>
            <p>Engaging content creation for your social media platforms.</p>
            <Link to="/social-media">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
