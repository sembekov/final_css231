import React from "react";

function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      <p className="text-gray-700 mb-4">
        We aim to deliver your order as quickly as possible. Our shipping policy
        outlines delivery times, costs, and other important information.
      </p>
      <h2 className="text-2xl font-bold mt-4">Delivery Times</h2>
      <p className="text-gray-700 mb-4">
        Orders are typically delivered within 3-7 business days. Delivery times
        may vary depending on your location and selected shipping method.
      </p>
      <h2 className="text-2xl font-bold mt-4">Shipping Costs</h2>
      <p className="text-gray-700 mb-4">
        Shipping is free for orders over $50. For orders below $50, a flat rate
        of $5 applies.
      </p>
      <h2 className="text-2xl font-bold mt-4">International Shipping</h2>
      <p className="text-gray-700">
        We offer international shipping to selected countries. Shipping costs
        and delivery times for international orders will be calculated at
        checkout.
      </p>
      <p className="text-gray-700 mt-4">
        For any questions regarding shipping, please contact our support team at
        shipping@example.com.
      </p>
    </div>
  );
}

export default ShippingPolicy;
