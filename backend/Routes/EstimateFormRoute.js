const express = require("express");
const router = express.Router();
const FormData = require("../models/EstimateFormData");

// POST route to save form data
router.post("/submit", async (req, res) => {
  try {
    const formData = new FormData(req.body); // Save data from the request body
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving form data", error });
  }
});

// GET route to fetch all form submissions (optional)
router.get("/", async (req, res) => {
  try {
    const submissions = await FormData.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions", error });
  }
});

module.exports = router;
