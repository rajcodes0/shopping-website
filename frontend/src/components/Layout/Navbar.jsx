import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router";
import ProfilePng from "../../assets/boy.png";
import useCartStore from "../../Store/CartStore";

function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    navigate(`/products?search=${query}`);
    setMenuOpen(false);
  };
  const cartItems = useCartStore((state) => state.cartItems);
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-black"
      : "text-gray-600 hover:text-violet-900 font-medium ";

  return (
    <div className="bg-white shadow-md relative z-50 rounded-2xl">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Shop</h1>

        <ul className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
             Cart ({cartItems.length})
          </NavLink>
        </ul>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border px-3 py-1 rounded-md outline-none w-40 focus:ring-2 focus:ring-black/10 transition"
          />
          <button
            type="submit"
            className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden flex flex-col gap-1.25 p-1 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </button>

          <NavLink to="/profile">
            <img
              src={ProfilePng}
              alt="profile"
              className="rounded-full h-10 w-10 object-cover border border-gray-200 hover:ring-2 hover:ring-black/20 transition"
            />
          </NavLink>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-3">
          <ul className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/login", label: "Login" },
              { to: "/cart", label: "Cart" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border px-3 py-1 rounded-md outline-none flex-1 focus:ring-2 focus:ring-black/10 transition"
            />
            <button
              type="submit"
              className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
