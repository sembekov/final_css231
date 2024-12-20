import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MultiLanguageProvider } from "./context/MultiLanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WishlistPage from "./pages/WishlistPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <MultiLanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Home />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MultiLanguageProvider>
  );
}

export default App;
