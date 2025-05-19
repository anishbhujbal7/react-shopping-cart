import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo only */}
        <NavLink to="/" className="flex items-center space-x-4">
          <img src="../logo.png" alt="Logo" className="h-12 w-auto rounded-full shadow-md" />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-teal-300 font-semibold border-b-4 border-teal-300 pb-1 transition-all duration-300"
                : "text-white hover:text-teal-300 transition-colors duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className="relative text-white hover:text-teal-300 transition-colors duration-300"
          >
            <TiShoppingCart className="text-4xl drop-shadow-md" />
            {cart.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-teal-400 text-black font-bold rounded-full px-2 py-0.5 text-xs shadow-lg animate-pulse">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
