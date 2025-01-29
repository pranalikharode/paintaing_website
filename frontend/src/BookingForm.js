import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for backend integration

const BookingForm = ({ formData, handleSubmit }) => {
  const [localFormData, setLocalFormData] = useState(formData);

  useEffect(() => {
    setLocalFormData(formData); // Update local form data when formData changes
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(); // Trigger final submit from parent component
  };

  return (
    <div style={styles.box}>
      <h2 style={{ textAlign: "center" }}>BOOK SITE VISIT</h2>
      <form onSubmit={onSubmit} style={styles.form}>
        {/* First Row: House No and Apartment Name */}
        <div style={styles.row}>
          <div style={styles.fieldGroup}>
            <input
              type="text"
              name="houseNo"
              value={localFormData.houseNo}
              onChange={handleChange}
              style={styles.input}
              placeholder="House No"
              required
            />
          </div>
          <div style={styles.fieldGroup}>
            <input
              type="text"
              name="apartmentName"
              value={localFormData.apartmentName}
              onChange={handleChange}
              style={styles.input}
              placeholder="Apartment Name"
              required
            />
          </div>
        </div>

        {/* Second Row: Area Name, Pincode, and Location */}
        <div style={styles.row}>
          <div style={styles.fieldGroup}>
            <input
              type="text"
              name="areaName"
              value={localFormData.areaName}
              onChange={handleChange}
              style={styles.input}
              placeholder="Area Name"
              required
            />
          </div>
          <div style={styles.fieldGroup}>
            <input
              type="text"
              name="pincode"
              value={localFormData.pincode}
              onChange={handleChange}
              style={styles.input}
              placeholder="Pincode"
              required
            />
          </div>
          <div style={styles.fieldGroup}>
            <input
              type="text"
              name="location"
              value={localFormData.location}
              onChange={handleChange}
              style={styles.input}
              placeholder="Location"
              required
            />
          </div>
        </div>

        {/* Third Row: Property Type Dropdown and Visit Date */}
        <div style={styles.row}>
          <div style={styles.fieldGroup}>
            <select
              name="propertyType"
              value={localFormData.propertyType}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">Select Your Property Type</option>
              <option value="Interior Space">Interior Space</option>
              <option value="Villa/Bungalow">Villa/Bungalow</option>
              <option value="High Rise Apartment">High Rise Apartment</option>
              <option value="Commercial Space">Commercial Space</option>
            </select>
          </div>
          <div style={styles.fieldGroup}>
            <input
              type="date"
              name="visitDate"
              value={localFormData.visitDate}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div style={styles.buttonWrapper}>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  box: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "20px",
    width: "100%",
    height: "auto",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  fieldGroup: {
    flex: "1",
    marginRight: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  },
  buttonWrapper: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#78e5eb",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default BookingForm;
