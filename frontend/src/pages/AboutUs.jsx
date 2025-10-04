import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are passionate about delivering high-quality products and
          exceptional shopping experiences. Our mission is to make your life
          easier, more stylish, and more convenient.
        </p>
      </div>

      {/* Two-column section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src="women1.jpg"
            alt="About us"
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-6">
            Founded with a simple idea — to bring quality and affordability
            together. Our team works tirelessly to handpick products that
            combine style, comfort, and durability.
              Founded with a simple idea — to bring quality and affordability
            together. Our team works tirelessly to handpick products that
            combine style, comfort, and durability.
              Founded with a simple idea — to bring quality and affordability
            together. Our team works tirelessly to handpick products that
            combine style, comfort, and durability.
              Founded with a simple idea — to bring quality and affordability
            together. Our team works tirelessly to handpick products that
            combine style, comfort, and durability.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Customer satisfaction is our top priority</li>
            <li>Commitment to quality and sustainability</li>
            <li>Innovative and trend-driven selections</li>
            <li>Trusted by thousands of happy customers</li>
             <li>Customer satisfaction is our top priority</li>
            <li>Commitment to quality and sustainability</li>
            <li>Innovative and trend-driven selections</li>
            <li>Trusted by thousands of happy customers</li>
             <li>Customer satisfaction is our top priority</li>
            <li>Commitment to quality and sustainability</li>
            <li>Innovative and trend-driven selections</li>
            <li>Trusted by thousands of happy customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
