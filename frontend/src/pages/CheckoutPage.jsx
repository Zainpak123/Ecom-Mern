import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

export default function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // ✅ Show red toast notification
    toast.error(" Order placed successfully!", {
      style: {
        backgroundColor: "#fffff", // Tailwind red-600
        color: "#33333",
      },
    });

    // simulate delay before navigating
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Delivery Information */}
        <div>
          <h2 className="text-lg font-semibold uppercase mb-6 border-b pb-2">
            Delivery Information
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Last name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email address" className="w-full p-3 border rounded-md col-span-2" />
            <input type="text" placeholder="Street" className="w-full p-3 border rounded-md col-span-2" />
            <input type="text" placeholder="City" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="State" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Zip code" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Country" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded-md col-span-2" />
          </form>
        </div>

        {/* Right: Cart Totals + Payment */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold uppercase mb-4 border-b pb-2">
            Cart Totals
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping Fee</span><span>${shipping.toFixed(2)}</span></div>
            <hr />
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Method */}
          <h3 className="text-sm font-semibold uppercase mt-6 mb-2 border-b pb-2">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="stripe" checked={paymentMethod==="stripe"} onChange={(e)=>setPaymentMethod(e.target.value)} className="accent-black" />
              <span className="text-blue-600 font-medium">Stripe</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="razorpay" checked={paymentMethod==="razorpay"} onChange={(e)=>setPaymentMethod(e.target.value)} className="accent-black" />
              <span className="text-green-600 font-medium">Razorpay</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="payment" value="cod" checked={paymentMethod==="cod"} onChange={(e)=>setPaymentMethod(e.target.value)} className="accent-black" />
              <span className="text-gray-700 font-medium">Cash on Delivery</span>
            </label>
          </div>

          {/* Place Order */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
