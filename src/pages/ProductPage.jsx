import React from "react";
import ProductDetails from "../components/ProductDetails";
import "./ProductPage.css";

const ProductPage = () => {
  const product = {
    name: "Premium Smartphone",
    image: "/assets/iphone.webp",
    description:
      "Experience the ultimate performance with this premium smartphone, featuring cutting-edge technology and sleek design.",
    rating: 4.8,
    reviews: [
      {
        user: "John Doe",
        comment: "Amazing phone with great features! Totally worth the price.",
        rating: 5,
      },
      {
        user: "Jane Smith",
        comment: "Good phone, but the battery life could be better.",
        rating: 4,
      },
    ],
  };

  return (
    <div className="product-page">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <p className="product-description">{product.description}</p>
          <p className="product-rating">Rating: {product.rating} / 5</p>
          <h3 className="reviews-title">Reviews:</h3>
          <ul className="reviews-list">
            {product.reviews.map((review, index) => (
              <li key={index} className="review-item">
                <p>
                  <strong>{review.user}</strong>: {review.comment} (
                  {review.rating} / 5)
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
