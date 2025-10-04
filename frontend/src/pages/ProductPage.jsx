import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const api = import.meta.env.VITE_API_URL;

  // 🧩 Fetch Product Data
  useEffect(() => {
    fetch(`${api}/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, [id]);

  // 🌀 Loading State
  if (!product && !error)
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="text-lg text-gray-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading product details...
        </motion.div>
      </div>
    );

  // ⚠️ Error State
  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-red-600 font-semibold text-lg mb-4">
          {error || "Failed to load product details."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Go Back
        </button>
      </div>
    );

  // 🛒 Add to Cart
  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* 🖼️ Left Section — Product Image */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
      </motion.div>

      {/* 🧾 Right Section — Product Details */}
      <motion.div
        className="flex flex-col justify-center space-y-6"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Product Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {product.name}
        </motion.h1>

        {/* Product Description */}
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {product.description}
        </motion.p>

        {/* Product Price */}
        <motion.p
          className="text-3xl font-semibold text-red-600"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ${product.price}
        </motion.p>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-xl hover:bg-red-700 shadow-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>

        {/* Decorative Red Line */}
        <motion.div
          className="w-20 h-1 bg-red-500 mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}
