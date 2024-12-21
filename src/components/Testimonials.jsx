import React from "react";

function Testimonials() {
  const testimonials = [
    {f
      id: 1,
      name: "John Doe",
      review: "Great shopping experience! Highly recommend this store.",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Fast delivery and excellent customer service.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-4 rounded shadow">
            <p className="italic">"{testimonial.review}"</p>
            <p className="mt-4 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;