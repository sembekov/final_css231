import React, { useState } from "react";

function ReviewForm() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ comment, rating }); // Replace with API call to submit review
    setComment("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Write your review..."
        required
      ></textarea>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value="" disabled>
          Select Rating
        </option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star{star > 1 && "s"}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
