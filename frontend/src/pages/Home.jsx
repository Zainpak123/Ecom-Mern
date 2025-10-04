import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  const [products, setProducts] = useState([]);

   const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${api}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 overflow-hidden">
      {/* 🌈 Banner Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        {/* Animated Gradient Background */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
              "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
              "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
              "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 opacity-30"
        ></motion.div>

        {/* Floating Decorative Icons */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/6514/6514605.png"
          alt="Star"
          className="absolute top-20 left-10 w-10 h-10 opacity-70"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          alt="Heart"
          className="absolute bottom-20 right-10 w-12 h-12 opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/9356/9356994.png"
          alt="Dress"
          className="absolute top-40 right-1/3 w-14 h-14 opacity-60"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Left Banner Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Discover Your{" "}
            <motion.span
              animate={{ color: ["#ef4444", "#ec4899", "#ef4444"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Style
            </motion.span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-lg mx-auto md:mx-0">
            Redefine your wardrobe with exclusive pieces designed to express your individuality.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl shadow-lg font-semibold hover:shadow-2xl transition"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Right Banner Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex justify-center md:justify-end mt-10 md:mt-0 w-full md:w-1/2"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="women1.jpg"
            alt="Fashion Banner"
            className="w-96 h-96 object-cover rounded-3xl shadow-2xl border border-gray-100"
          />
        </motion.div>
      </section>

      {/* 🛍 Product Collection Section */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-red-600">Collection</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <motion.div
                key={product._id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="mt-4 font-semibold text-lg">{product.name}</h4>
                <p className="text-gray-500">${product.price}</p>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Loading products...</p>
          )}
        </div>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-gray-50 to-red-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our <span className="text-red-600">Customers</span> Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah", text: "Amazing quality and fast delivery!" },
            { name: "John", text: "Loved the collection. Stylish & affordable." },
            { name: "Aisha", text: "My go-to store for all fashion needs!" },
          ].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <p className="italic text-gray-600 mb-4">“{review.text}”</p>
              <h4 className="font-bold text-gray-800">— {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📩 Newsletter Section */}
      <section className="relative px-6 md:px-16 py-20 text-center bg-gradient-to-r from-gray-50 to-red-50 text-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4 relative z-10"
        >
          Stay Updated
        </motion.h2>
        <p className="mb-8 text-lg text-black relative z-10">
          Subscribe to get exclusive offers, style tips & the latest arrivals.
        </p>

        <motion.form
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col sm:flex-row justify-center items-center max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 bg-transparent text-white placeholder-gray-600 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="mt-3 sm:mt-0 sm:ml-2 px-6 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}

export default Home;
