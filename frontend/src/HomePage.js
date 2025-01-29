import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import FormBox from './formbox'; 
import BookingForm from './BookingForm'; 
import './App.css';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({});

  const handleBookSiteVisit = (data) => {
    setFormData(data);
    setShowBookingForm(true);
  };

  const handleBookingFormSubmit = (bookingData) => {
    const combinedData = { ...formData, ...bookingData };

    axios.post("http://localhost:5000/api/site-visits", combinedData)
      .then((response) => {
        console.log("Data saved to database:", response.data);
        alert("Site visit booked successfully!");
        setFormData({});  // Reset form data after successful submission
        setShowBookingForm(false); // Optionally hide the booking form
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Error saving data. Please try again.");
      });
  };

  return (
    <div>
      <section className="homepage">
      <div>
        {!showBookingForm ? (
          <FormBox handleBookSiteVisit={handleBookSiteVisit} />
        ) : (
          <BookingForm onSubmit={handleBookingFormSubmit} />
        )}
      </div>
      </section>

     
    </div>
  );
}

export default App;
