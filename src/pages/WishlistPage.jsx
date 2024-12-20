import React from "react";
import Wishlist from "../components/Wishlist";

function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      <Wishlist />
    </div>
  );
}

export default WishlistPage;
