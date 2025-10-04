import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold">Zei fashion<span className="text-red-600">.</span></h2>
          <p className="mt-3 text-gray-400 text-sm">
            The customer is at the heart of our unique business model, 
            which includes design.
          </p>
          <div className="flex gap-2 mt-4 text-xl">💳  </div>
        </div>

        {/* Shopping Links */}
        <div>
          <h3 className="font-bold mb-3">SHOPPING</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link to="/clothing">Clothing Store</Link>
            <Link to="/shoes">Trending Shoes</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/sale">Sale</Link>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-3">SHOPPING</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link to="/contact">Contact Us</Link>
            <Link to="/payment">Payment Methods</Link>
            <Link to="/delivery">Delivery</Link>
            <Link to="/returns">Return & Exchanges</Link>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-3">NEWSLETTER</h3>
          <p className="text-gray-400 text-sm mb-3">Be the first to know about new arrivals, sales & promos!</p>
          <div className="flex border border-gray-600 rounded-md overflow-hidden">
            <input type="email" placeholder="Your email..." className="flex-1 px-3 py-2 bg-transparent text-sm outline-none" />
            <button className="px-4 bg-red-600">✉</button>
          </div>
        </div>
      </div>

      
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Male Fashion. Made with ❤️ by ZainUlAbideen
      </div>
    </footer>
  );
}
