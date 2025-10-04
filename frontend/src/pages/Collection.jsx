import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;

    fetch(`${api}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const pageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-50 to-white min-h-screen"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Banner Section */}
      <motion.div
        className="relative w-full h-[400px] mb-16 overflow-hidden rounded-b-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="collection-banner.jpg"
          alt="Collection Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover Our Exclusive Collections
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Curated designs and handpicked trends — crafted for your lifestyle.
          </motion.p>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="px-6 pb-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          All Collections
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product._id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={`/product/${product._id}`}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="p-4">
                  <h4 className="mt-2 font-semibold text-lg text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mt-1">${product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
