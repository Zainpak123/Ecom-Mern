import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, Box, Trash2 } from "lucide-react";

function AdminDashboard() {
  const API_URL = import.meta.env.VITE_API_URL; // ✅ Environment variable
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [activeTab, setActiveTab] = useState("products");

  // Fetch products
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [API_URL]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.msg);
      setProducts([...products, data.product]);
      setFormData({ name: "", description: "", price: "", image: "" });
      setActiveTab("products");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">
          Admin Panel
        </h2>

        <button
          onClick={() => setActiveTab("products")}
          className={`flex items-center gap-3 mb-3 px-4 py-2 rounded-xl text-left transition ${
            activeTab === "products" ? "bg-red-600" : "hover:bg-gray-700"
          }`}
        >
          <Box size={20} /> Products
        </button>

        <button
          onClick={() => setActiveTab("add")}
          className={`flex items-center gap-3 px-4 py-2 rounded-xl text-left transition ${
            activeTab === "add" ? "bg-red-600" : "hover:bg-gray-700"
          }`}
        >
          <PlusCircle size={20} /> Add Product
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === "add" && (
            <motion.div
              key="add"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Add New Product
              </h3>

              <form
                onSubmit={addProduct}
                className="bg-white p-8 rounded-3xl shadow-lg max-w-lg space-y-5 border border-gray-100"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Product Name"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-red-400 outline-none"
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  placeholder="Description"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-red-400 outline-none"
                ></textarea>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  placeholder="Price"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-red-400 outline-none"
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  placeholder="Image URL"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-red-400 outline-none"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  Add Product
                </motion.button>
              </form>
            </motion.div>
          )}

          {activeTab === "products" && (
            <motion.div
              key="products"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                All Products
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition relative border border-gray-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <h4 className="mt-3 font-bold text-lg text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-gray-600">${product.price}</p>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      onClick={() => deleteProduct(product._id)}
                      className="absolute top-3 right-3 text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default AdminDashboard;
