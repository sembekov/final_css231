import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, StarHalf, ArrowLeft } from "lucide-react";
import { useShoppingCart } from '../context/ShoppingContext';
import {productsData} from '../data/Products'

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShoppingCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setIsLoading(true);
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) return (
    <div className="container mx-auto p-6">
      <div className="animate-pulse">
        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
      </div>
    </div>
  );

  if (!product) return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Product not found</h2>
      <button 
        onClick={() => navigate('/products')}
        className="mt-4 text-blue-600 hover:text-blue-800"
      >
        Back to Products
      </button>
    </div>
  );

  const averageRating = product.ratings.length > 0
    ? product.ratings.reduce((acc, curr) => acc + curr.rating, 0) / product.ratings.length
    : 0;

  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <Star key={i + fullStars} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
    );
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="container mx-auto p-6">
      <button 
        onClick={() => navigate('/products')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <RatingStars rating={averageRating} />
            <span className="text-gray-600">({averageRating.toFixed(1)})</span>
            <span className="text-gray-500">
              {product.ratings.length} {product.ratings.length === 1 ? 'review' : 'reviews'}
            </span>
          </div>

          <p className="text-2xl text-gray-800 font-semibold mb-4">${product.price}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Stock Status:</h3>
            <p className={`text-lg ${product.stockCount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stockCount > 0 ? `${product.stockCount} items left in stock` : 'Out of stock'}
            </p>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={product.stockCount === 0}
              className="flex-1 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Customer Reviews ({product.ratings.length})
        </h2>
        
        {product.ratings.length === 0 ? (
          <p className="text-gray-500">No reviews yet</p>
        ) : (
          <div className="space-y-6">
            {product.ratings.map((rating) => (
              <div key={rating.id} className="border-b pb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-medium">{rating.userName}</span>
                  <RatingStars rating={rating.rating} />
                  <span className="text-gray-600 text-sm">
                    {new Date(rating.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600">{rating.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;