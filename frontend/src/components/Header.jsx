import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    if (token) {
      setIsLoggedIn(true);
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole(null);
    navigate("/login");
  };

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Zei <span className="text-red-600">Fashion</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          {["Home", "Collection", "About", "Contact"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/admin-login"
            className="font-semibold text-red-600 hover:underline"
          >
            Admin Panel
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">
          <img
            src="search.png"
            className="w-5 h-auto cursor-pointer hover:scale-110 transition-transform"
            alt="search"
          />
          {!isLoggedIn ? (
            <Link to="/login">
              <img
                src="login.png"
                className="w-5 h-auto cursor-pointer hover:scale-110 transition-transform"
                alt="login"
              />
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:underline"
            >
              Logout
            </button>
          )}
          <Link to="/cart">
            <img
              src="cart.png"
              className="w-8 h-auto cursor-pointer hover:scale-110 transition-transform"
              alt="cart"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white mt-3 rounded-lg shadow-md p-4 space-y-3"
          >
            {["Home", "Collection", "About", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-red-600 transition"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/admin-login"
              onClick={() => setOpen(false)}
              className="block text-red-600 font-semibold"
            >
              Admin Panel
            </Link>
            <div className="pt-3 border-t flex gap-4 items-center">
              {!isLoggedIn ? (
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-red-600"
                >
                  Logout
                </button>
              )}
              <Link to="/cart" onClick={() => setOpen(false)}>
                👜 Cart
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
