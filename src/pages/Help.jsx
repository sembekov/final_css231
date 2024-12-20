import React from "react";

function Help() {
  const helpTopics = [
    {
      title: "How to Place an Order?",
      content:
        "To place an order, simply browse the products, add them to your cart, and proceed to checkout.",
    },
    {
      title: "Payment Methods",
      content: "We accept Visa, Mastercard, PayPal, and Apple Pay.",
    },
    {
      title: "Contact Support",
      content:
        "If you need assistance, contact our support team at support@example.com or call us at 123-456-7890.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <div className="space-y-6">
        {helpTopics.map((topic, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
            <p className="text-gray-700">{topic.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
