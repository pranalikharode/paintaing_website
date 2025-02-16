import React from "react";
import "./SatisfactionSection.css";

const SatisfactionSection = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src= "./home.png" alt="Happy Family" className="home-image" />
      </div>
      <div className="text-section">
        <h1>
          You’ll Be Satisfied <br />
          With <span className="highlight">Your Decision.</span>
        </h1>
        <p className="description">
          By choosing us, you’re not merely selecting a painting service;
          you’re investing in a transformative experience that breathes life into your vision.
        </p>
        <div className="stats-container">
          <div className="stat">
            <h2>39808+</h2>
            <p>Happy homes</p>
          </div>
          <div className="stat">
            <h2>4.6<span className="star">★</span></h2>
            <p>8K+ Google Reviews</p>
          </div>
          <div className="stat">
            <h2>1 Year</h2>
            <p>Warranty</p>
          </div>
          <div className="stat">
            <h2>2M+</h2>
            <p>Crafted Designs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionSection;
