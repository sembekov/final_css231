import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Ichiba 市場
        </Link>
        <button
          className="block md:hidden text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex gap-4 md:static absolute bg-blue-600 w-full left-0 md:w-auto`}
        >
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-300 block px-4 py-2 md:p-0"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-gray-300 block px-4 py-2 md:p-0"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-300 block px-4 py-2 md:p-0"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
