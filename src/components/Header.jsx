import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Ichiba 市場
        </Link>
        <nav className="space-x-4">
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
