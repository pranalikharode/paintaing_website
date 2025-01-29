const express = require("express");
const router = express.Router();
const SiteVisit = require("../models/SiteVisit"); // Assuming you have a SiteVisit model

// POST endpoint for submitting a site visit form
router.post("/", async (req, res) => {
  const {
    name,
    contact,
    location,
    dropdown,
    houseNo,
    apartmentName,
    areaName,
    pincode,
    propertyType,
    visitDate,
  } = req.body;

  // Check if all required fields are provided
  if (
    !name ||
    !contact ||
    !location ||
    !dropdown ||
    !houseNo ||
    !apartmentName ||
    !areaName ||
    !pincode ||
    !propertyType ||
    !visitDate
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new site visit record
    const newSiteVisit = new SiteVisit({
      name,
      contact,
      location,
      dropdown,
      houseNo,
      apartmentName,
      areaName,
      pincode,
      propertyType,
      visitDate,
    });

    // Save the record to the database
    await newSiteVisit.save();

    // Send a success response with the saved site visit data
    return res.status(201).json(newSiteVisit);
  } catch (error) {
    console.error("Error saving data:", error);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
});

module.exports = router;
