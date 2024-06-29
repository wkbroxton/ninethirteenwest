import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Orange County, CA USA</p>
          <p>Phone: (949) 229-5213</p>
          <p>Email: william@ninethirteenwest.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="socials">
            <a
              href="https://www.facebook.com/ninethirteenwest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            {/* <a
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
            </a> */}
            <a
              href="https://www.linkedin.com/company/nine-thirteen-west"
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
