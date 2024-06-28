import React from "react";
import "./Footer.css"; // Ensure this CSS file is created

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Main Street, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@ninethirteenwest.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Nine Thirteen West. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
