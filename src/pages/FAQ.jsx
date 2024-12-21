import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold">{faq.question}</h2>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
