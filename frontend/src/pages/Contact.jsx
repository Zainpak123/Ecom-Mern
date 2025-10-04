import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title Section */}
      <div className="text-center mb-14">
        <motion.h1
          className="text-5xl font-bold mb-4 text-gray-800"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have questions, feedback, or need support? We’d love to hear from you.
        </motion.p>
      </div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team is always ready to assist you. Reach out to us using the
            details below or by filling out the form. We usually respond within 24 hours.
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center space-x-3">
              <Mail className="text-red-600 w-6 h-6" />
              <p><strong>Email:</strong> support@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-red-600 w-6 h-6" />
              <p><strong>Phone:</strong> +92 300 1234567</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-red-600 w-6 h-6" />
              <p><strong>Address:</strong> Islamabad, Pakistan</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Decorative Gradient Divider */}
      <motion.div
        className="mt-20 h-1 w-32 mx-auto bg-gradient-to-r from-red-600 to-pink-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ delay: 0.4, duration: 0.8 }}
      ></motion.div>
    </motion.div>
  );
}
