import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">
        
        {/* Image logo */}
        <a className="navbar-brand" href="#">
          <img src="/shiv.jpg" className="navbar-logo" alt="Shiv Enterprises" />
        </a>

        {/* Right side container */}
        <div className="right-side">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <button className="custom-btn">Get Free Estimate</button>
          </a>
          {/* Phone number */}
          <div className="contact-info">
            <a href="tel:+1234567890" className="contact-link">
              <i className="fas fa-phone-alt phone-icon"></i>
              <span className="phone-number">+1 234 567 890</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
