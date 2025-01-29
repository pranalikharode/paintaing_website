import React, { useState } from "react";
import FormBox from "./formbox";
import BookingForm from "./BookingForm";
import axios from "axios";
import './App.css'; // Importing CSS for styling

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    dropdown: "",
    houseNo: "",
    apartmentName: "",
    areaName: "",
    pincode: "",
    propertyType: "",
    visitDate: "",
  });

  // Handle when the form data needs to be moved to the next step
  const handleNext = (newData) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      console.log("Updated form data:", updatedData); // Check if form data is correct
      return updatedData;
    });
    setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
  };

  // Handle final form submission
  const handleSubmit = async () => {
    console.log("Final Form Data Submitted:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/site-visits", // Ensure this endpoint is correct
        formData
      );
      alert("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="background-image2">
      <div className="estimateform-container">
        {currentStep === 1 && (
          <FormBox handleNext={handleNext} formData={formData} />
        )}
        {currentStep === 2 && (
          <BookingForm
            formData={formData}
            handleSubmit={handleSubmit} // Pass the handleSubmit directly
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
