// ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // Extract product ID from URL parameters

  // Placeholder for product details (replace with API call or context)
  const product = {
    id,
    name: `Product ${id}`,
    price: 50,
    description: "This is a detailed description of the product.",
    image: `/images/product${id}.jpg`, // Update with actual image path
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded shadow-lg mb-4 md:mb-0"
        />
        {/* Product Information */}
        <div className="md:ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
