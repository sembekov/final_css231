import React from "react";
import ReviewForm from "../components/ReviewForm";

function ProductDetails({ product }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <p className="font-bold">{review.user}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}

export default ProductDetails;
