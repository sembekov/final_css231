import React from "react";
import ReviewForm from "../components/ReviewForm";

function Reviews() {
  const reviews = [
    { id: 1, user: "John Doe", comment: "Great product!", rating: 5 },
    { id: 2, user: "Jane Smith", comment: "Good value for money.", rating: 4 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{review.user}</h2>
            <p className="text-lg">Rating: {review.rating}/5</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <ReviewForm />
    </div>
  );
}

export default Reviews;
