import React from "react";

function PromoSection() {
  return (
    <div className="bg-blue-100 p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Exclusive Offers</h2>
      <p className="text-gray-700 mb-4">
        Sign up for our newsletter to receive the latest updates and special
        promotions.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-2 border rounded"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default PromoSection;
