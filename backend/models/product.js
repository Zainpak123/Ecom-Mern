// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }, // store image URL or base64
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
