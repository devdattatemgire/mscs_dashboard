const mongoose = require('mongoose');

// Define the schema for the 'dt' collection
const dataSchema = new mongoose.Schema({
  Name: String,
  Address: String,
  State: String,
  District: String,
  Date: String,
  Area: String,
  Sector: String,
  // Add other fields as per your data structure
});

// Create a model using the schema
const DataModel = mongoose.model('Data', dataSchema, 'dt');

module.exports = DataModel;


