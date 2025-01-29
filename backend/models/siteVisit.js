const mongoose = require('mongoose');

const siteVisitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  dropdown: { type: String, required: true },
  houseNo: { type: String, required: true },
  apartmentName: { type: String, required: true },
  areaName: { type: String, required: true },
  pincode: { type: Number, required: true },
  propertyType: { type: String, required: true },
  visitDate: { type: Date, required: true },
});

module.exports = mongoose.model('SiteVisit', siteVisitSchema);
