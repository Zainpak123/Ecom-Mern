// routes/productRoute.js
const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Add Product (Admin only)
router.post("/add", async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const product = new Product({ name, description, price, image });
    await product.save();
    res.status(201).json({ msg: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ msg: "Error adding product", error: err.message });
  }
});
// Get single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching product", error: err.message });
  }
});



// Get all Products (Users)
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Delete Product (Admin only)
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting product", error: err.message });
  }
});

module.exports = router;
