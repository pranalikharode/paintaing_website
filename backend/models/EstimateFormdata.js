const mongoose = require("mongoose");

// Define schema for form data
const FormDataSchema = new mongoose.Schema({
  city: { type: String, required: true },
  paintType: { type: String, required: true },
  houseSize: { type: String, required: true },
  paintingType: { type: String, required: true },
  preference: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model("FormData", FormDataSchema);
