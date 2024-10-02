// Footer.js
import React from 'react';
import './Footer.css';  // Import the CSS for the footer

function Footer() {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Your DigiInvites. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-socials">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;

