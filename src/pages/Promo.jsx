import React from "react";
import PromoBanner from "../components/PromoBanner";
import ProductGrid from "../components/ProductGrid";

function Promo() {
  const promoProducts = [
    { id: 1, name: "Smartphone", price: 699, image: "#" },
    { id: 2, name: "Smartwatch", price: 199, image: "#" },
  ];

  return (
    <div>
      <PromoBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Promotions</h1>
        <ProductGrid products={promoProducts} />
      </div>
    </div>
  );
}

export default Promo;
