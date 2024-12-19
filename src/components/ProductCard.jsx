import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-t"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-lg font-medium text-gray-700">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
