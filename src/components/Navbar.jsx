import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Store</Link>
        <div className="space-x-4">
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          <Link to="/orders" className="hover:text-gray-300">Orders</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;