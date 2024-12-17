import React from "react";
import ProductGrid from "./ProductCard";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <ProductGrid />
      </div>
    </section>
  );
};

export default HeroSection;
