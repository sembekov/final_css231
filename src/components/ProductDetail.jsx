import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const products = [
    { id: 1, name: "Product 1", price: 25, image: "/images/product.jpg", description: "A detailed description of Product 1" },
    { id: 2, name: "Product 2", price: 35, image: "/images/product.jpg", description: "A detailed description of Product 2" },
  ];

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div className="container mx-auto p-6">Product not found</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price}</p>
          <p className="mb-6">{product.description}</p>
          <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;