import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: "",
    paintType: "Interior",
    houseSize: "1 BHK",
    paintingType: "Fresh Painting",
    preference: "Economy",
    name: "",
    phone: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          city: "",
          paintType: "Interior",
          houseSize: "1 BHK",
          paintingType: "Fresh Painting",
          preference: "Economy",
          name: "",
          phone: "",
        });
        setStep(1);
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="app">
      <div className="background-image">
        <div className="form-container">
          <div className="form-card">
            <div className="form-header">
              <h2>Step {step} of 3</h2>
            </div>
            {step === 1 && (
              <div className="form-step">
                <h2 className="form-title">Where do you live?</h2>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="form-input"
                />

                <h2 className="form-title">What part of your house do you wish to paint?</h2>
                <select
                  name="paintType"
                  value={formData.paintType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Interior">Interior</option>
                  <option value="Exterior">Exterior</option>
                </select>

                <h2 className="form-title">Select the size of your house</h2>
                <select
                  name="houseSize"
                  value={formData.houseSize}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK+">4 BHK+</option>
                </select>

                <button onClick={nextStep} className="btn-next">
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2 className="form-title">What type of painting does your house require?</h2>
                <select
                  name="paintingType"
                  value={formData.paintingType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Fresh Painting">Fresh Painting</option>
                  <option value="Re-Painting">Re-Painting</option>
                  <option value="Rental Painting">Rental Painting</option>
                </select>

                <h2 className="form-title">How would you describe your preference?</h2>
                <select
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium">Premium</option>
                  <option value="Luxury">Luxury</option>
                </select>

                <div className="btn-group">
                  <button onClick={prevStep} className="btn-prev">
                    Previous
                  </button>
                  <button onClick={nextStep} className="btn-next">
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2 className="form-title">Get Your Estimate on WhatsApp</h2>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-input"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="form-input"
                />

                <div className="btn-group">
                  <button onClick={prevStep} className="btn-prev">
                    Previous
                  </button>
                  <button onClick={handleSubmit} className="btn-submit">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
