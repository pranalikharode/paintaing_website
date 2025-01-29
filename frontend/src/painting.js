import React, { useState } from "react";
import "./paintaing.css";


const PaintingForm = () => {
  const [formData, setFormData] = useState({
    city: "Pune",
    paintType: "Interior",
    houseSize: "2 BHK",
    paintingType: "Fresh Painting",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-heading">Where do you live?</h1>
      <select
        className="form-dropdown"
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
      >
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>

      <h1 className="form-heading">What part of your house do you wish to paint?</h1>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${
            formData.paintType === "Interior" ? "active" : ""
          }`}
          onClick={() => handleChange("paintType", "Interior")}
        >
          Interior
        </button>
        <button
          className={`toggle-button ${
            formData.paintType === "Exterior" ? "active" : ""
          }`}
          onClick={() => handleChange("paintType", "Exterior")}
        >
          Exterior
        </button>
      </div>

      <h1 className="form-heading">Select the size of your house</h1>
      <div className="size-buttons">
        {["1 BHK", "2 BHK", "3 BHK", "4 BHK+"].map((size) => (
          <button
            key={size}
            className={`size-button ${
              formData.houseSize === size ? "active" : ""
            }`}
            onClick={() => handleChange("houseSize", size)}
          >
            {size}
          </button>
        ))}
      </div>
      <p className="info-text">
        Typically, 2 BHK has a carpet area of 700-1000 sqft. If yours doesn’t
        fall in this range, <a href="#">click here</a>.
      </p>

      <h1 className="form-heading">What type of painting does your house require?</h1>
      <div className="painting-buttons">
        {["Fresh Painting", "Re-Painting", "Rental Painting"].map((type) => (
          <button
            key={type}
            className={`painting-button ${
              formData.paintingType === type ? "active" : ""
            }`}
            onClick={() => handleChange("paintingType", type)}
          >
            {type}
          </button>
        ))}
      </div>

      <button className="next-button">Next</button>
    </div>
  );
};

export default PaintingForm;
