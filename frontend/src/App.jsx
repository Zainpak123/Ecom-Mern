import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import AdminDashBoard from "./pages/AdminDashBoard";
import ProductPage from "./pages/ProductPage";

import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <CartProvider>

    
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
           <Route path="/collection" element={<Collection />} />
           <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashBoard />} />
            <Route path="/product/:id" element = {<ProductPage />}></Route>
            <Route path="/cart" element= {< CartPage />}></Route>
            <Route path="/checkout" element= {< CheckoutPage />}></Route>
            <Route path="/about" element= {< AboutUs/>}></Route>
            <Route path="/contact" element= {< Contact />}></Route>
            
        </Routes>
      </main>
      <Footer />
      </CartProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
