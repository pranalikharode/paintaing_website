import React, { useState } from "react";
import BookingForm from "./BookingForm";
import FormBox from "./FormBox";
import axios from "axios"; // Import axios for backend integration

const ParentComponent = () => {
  const [bookingFormData, setBookingFormData] = useState({
    houseNo: "",
    apartmentName: "",
    areaName: "",
    pincode: "",
    location: "",
    propertyType: "",
    visitDate: "",
  });

  const [formBoxData, setFormBoxData] = useState({
    name: "",
    contact: "",
    location: "",
    dropdown: "",
  });

  // Handle data change from BookingForm
  const handleBookingFormChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData({ ...bookingFormData, [name]: value });
  };

  // Handle data change from FormBox
  const handleFormBoxChange = (e) => {
    const { name, value } = e.target;
    setFormBoxData({ ...formBoxData, [name]: value });
  };

  // Handle both forms' submission together
  const handleSubmit = async () => {
    // Combine the data from both forms
    const combinedData = {
      ...bookingFormData,
      ...formBoxData,
    };

    // Send combined data to the backend
    try {
      const response = await axios.post("http://localhost:5000/api/site-visits", combinedData);
      console.log("Combined data successfully submitted:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
      <BookingForm
        formData={bookingFormData}
        onFormDataChange={handleBookingFormChange}
      />
      <FormBox
        formData={formBoxData}
        onFormDataChange={handleFormBoxChange}
      />
      <button onClick={handleSubmit}>Submit All</button>
    </div>
  );
};

export default ParentComponent;
