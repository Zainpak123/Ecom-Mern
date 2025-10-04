const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./connect");

const userRoute = require("./route/userRoute");
const productRoute = require("./route/productRoute");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDb(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();

// Allow requests from frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoute);
app.use("/products", productRoute);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
