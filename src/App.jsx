import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingProvider } from './context/ShoppingContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetail";

function App() {
  return (
    <ShoppingProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShoppingProvider>
  );
}

export default App;
