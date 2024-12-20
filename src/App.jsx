import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishlistPage from "./pages/WishlistPage"; // New Wishlist Page
import Admin from "./pages/Admin";
import Reviews from "./pages/Reviews"; // New Reviews Page
import About from "./pages/About"; // About Page
import Contact from "./pages/Contact"; // Contact Page
import OrderHistory from "./pages/OrderHistory"; // Order History Page
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher"; // Language Switcher Component
import MultiLanguageProvider from "./context/MultiLanguageContext"; // Multi-language context

function App() {
  return (
    <MultiLanguageProvider>
      <Router>
        <Header />
        <LanguageSwitcher /> {/* Language switcher at the top */}
        <main className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product/:id/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </MultiLanguageProvider>
  );
}

export default App;
