import React from "react";
import "./SatisfactionSection.css";

const SatisfactionSection = () => {
  return (
    <section className="satisfaction-section">
      {/* Left Side: Image */}
      <div className="image-container">
        <img
          src="https://stock.adobe.com/search?k=happy+family" // Replace with actual image path
          alt="Happy Family"
          className="image"
        />
      </div>
      
      {/* Right Side: Text and Stats */}
      <div className="content-container">
        <h2 className="heading">
          You’ll Be Satisfied With <span className="highlight">Your Decision.</span>
        </h2>
        <p className="description">
          By choosing us, you’re not merely selecting a painting service; you’re investing in a transformative experience that breathes life into your vision.
        </p>
        
        {/* Stats */}
        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number">39808+</h3>
            <p className="stat-text">Happy homes</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">4.6<span className="star">★</span></h3>
            <p className="stat-text">8K+ Google Review</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">1 Year</h3>
            <p className="stat-text">Warranty</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">2M+</h3>
            <p className="stat-text">Crafted Designs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
