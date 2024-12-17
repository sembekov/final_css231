import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
