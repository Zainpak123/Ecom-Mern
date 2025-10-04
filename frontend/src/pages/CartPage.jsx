import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = 0;
  const total = subtotal + tax;

  // Empty Cart View
  if (cart.length === 0)
    return (
      <motion.div
        className="flex flex-col justify-center items-center py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl text-gray-600 mb-4">Your cart is empty 🛒</p>
        <motion.button
          onClick={() => navigate("/")}
          className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    );

  return (
    <motion.div
      className="px-6 py-16 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your Shopping Cart
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item._id}
                className="flex items-center justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {/* Product Info */}
                <div className="flex items-center space-x-6">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  />
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      ${item.price} × {item.quantity}
                    </p>
                    <p className="font-semibold text-gray-900 mt-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <motion.button
                  onClick={() => removeFromCart(item._id)}
                  className="text-gray-400 hover:text-red-600 transition"
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={22} />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 sticky top-20 h-fit"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Order Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-bold text-xl text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <motion.button
            onClick={() => navigate("/checkout")}
            className="w-full mt-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-all shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
