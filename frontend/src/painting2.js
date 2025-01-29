import React, { useState } from "react";
import "./painting2.css";

const PaintPreferenceForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      fetch("/api/submit-preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preference: selectedOption }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">How would you describe your preference?</h2>
        <div className="options-grid">
          {/* Economy Option */}
          <div
            className={`option-card economy ${selectedOption === "ECONOMY" ? "selected" : ""}`}
            onClick={() => handleOptionClick("ECONOMY")}
          >
            <h3 className="option-title">ECONOMY</h3>
            <p className="option-description">
              I'm looking for budget-friendly painting which doesn't compromise on the quality!
            </p>
            <ul className="option-details">
              <li>✔ Matt Finish</li>
              <li>✘ Non-Washable</li>
              <li>⏳ Durability Up to 2 years</li>
            </ul>
          </div>

          {/* Premium Option */}
          <div
            className={`option-card premium ${selectedOption === "PREMIUM" ? "selected" : ""}`}
            onClick={() => handleOptionClick("PREMIUM")}
          >
            <h3 className="option-title">PREMIUM</h3>
            <p className="option-description">
              I want my walls to have a classy and elegant feel!
            </p>
            <ul className="option-details">
              <li>✔ Matt & Sheen Finish</li>
              <li>✔ Semi-Washable</li>
              <li>⏳ Durability Up to 5 years</li>
            </ul>
          </div>

          {/* Luxury Option */}
          <div
            className={`option-card luxury ${selectedOption === "LUXURY" ? "selected" : ""}`}
            onClick={() => handleOptionClick("LUXURY")}
          >
            <h3 className="option-title">LUXURY</h3>
            <p className="option-description">
              I want my walls to look exquisite and royal, much to my friends' envy!
            </p>
            <ul className="option-details">
              <li>✔ Matt & Sheen Finish</li>
              <li>✔ Fully-Washable</li>
              <li>⏳ Durability Up to 7 years</li>
            </ul>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            onClick={handleSubmit}
            className="nav-button submit"
            disabled={!selectedOption}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintPreferenceForm;
