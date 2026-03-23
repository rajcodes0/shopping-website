import React from "react";
import { ShoppingBag, HandCoins, HeartHandshake } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Top Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center p-6 border-b border-gray-700">
        
        <div className="flex flex-col items-center gap-2">
          <ShoppingBag size={28} />
          <h2 className="text-sm sm:text-base">Happy Customers</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <HeartHandshake size={28} />
          <h2 className="text-sm sm:text-base">7 Days Return</h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <HandCoins size={28} />
          <h2 className="text-sm sm:text-base">Easy Payments</h2>
        </div>

      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-white text-black">

        {/* Links */}
        <div>
          <h1 className="text-lg font-bold mb-3">Links</h1>
          <ul className="space-y-2">
            <li className="hover:text-violet-500 cursor-pointer">About</li>
            <li className="hover:text-violet-500 cursor-pointer">Portfolio</li>
            <li className="hover:text-violet-500 cursor-pointer">Top Products</li>
            <li className="hover:text-violet-500 cursor-pointer">Branches</li>
            <li className="hover:text-violet-500 cursor-pointer">Customers</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h1 className="text-lg font-bold mb-3">Services</h1>
          <ul className="space-y-2">
            <li className="hover:text-violet-500 cursor-pointer">Cancellation</li>
            <li className="hover:text-violet-500 cursor-pointer">Orders</li>
            <li className="hover:text-violet-500 cursor-pointer">Reviews</li>
            <li className="hover:text-violet-500 cursor-pointer">Refund</li>
            <li className="hover:text-violet-500 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Description */}
        <div>
          <h1 className="text-lg font-bold mb-3">Shop Experience</h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Shop with confidence. Smooth experience, fast delivery, and easy
            payments. Designed to make your buying process simple and enjoyable.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;