import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Feedback</h1>
      <p className="text-gray-700 mb-4">
        Your feedback is valuable to us. Please let us know how we can improve
        our services.
      </p>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          className="w-full p-4 border rounded mb-4"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;
