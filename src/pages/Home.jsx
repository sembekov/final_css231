import React from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const products = [
    { id: 1, name: "Product 1", price: 25, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 35, image: "/images/product2.jpg" },
    // Add more products
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar />
      <h1 className="text-4xl font-bold text-center my-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
