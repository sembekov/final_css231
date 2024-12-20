import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useShoppingCart } from '../context/ShoppingContext';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  
  // Получаем контекст и добавляем отладочную информацию
  const shoppingCart = useShoppingCart();
  console.log('Shopping cart context:', shoppingCart);
  const { addToCart, cart } = shoppingCart;

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    try {
      addToCart(product);
      console.log('Current cart after adding:', cart);
      setShowCheckoutModal(true);
      setTimeout(() => {
        setShowCheckoutModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };


  const products = [
    { 
      id: 1, 
      name: "Product 1", 
      price: 25, 
      image: "/api/placeholder/400/300",
      description: "High-quality product with premium features. Perfect for everyday use with outstanding durability."
    },
    { 
      id: 2, 
      name: "Product 2", 
      price: 35, 
      image: "/api/placeholder/400/300",
      description: "Compact and portable, this product is perfect for those who need versatility on the go."
    },
    { 
      id: 3, 
      name: "Product 3", 
      price: 45, 
      image: "/api/placeholder/400/300",
      description: "Engineered with precision, offering cutting-edge technology and high performance."
    },
    { 
      id: 4, 
      name: "Product 4", 
      price: 60, 
      image: "/api/placeholder/400/300",
      description: "Luxury item designed for those who appreciate the finer things in life."
    },
    { 
      id: 5, 
      name: "Product 5", 
      price: 50, 
      image: "/api/placeholder/400/300",
      description: "The perfect blend of style and functionality, ideal for both casual and formal occasions."
    },
    { 
      id: 6, 
      name: "Product 6", 
      price: 20, 
      image: "/api/placeholder/400/300",
      description: "Affordable yet reliable, this product offers great value without compromising quality."
    },
    { 
      id: 7, 
      name: "Product 7", 
      price: 40, 
      image: "/api/placeholder/400/300",
      description: "A sophisticated design that brings modern aesthetics into your home or office."
    },
    { 
      id: 8, 
      name: "Product 8", 
      price: 75, 
      image: "/api/placeholder/400/300",
      description: "Top-tier performance and durability, built to last for years of heavy use."
    },
    { 
      id: 9, 
      name: "Product 9", 
      price: 30, 
      image: "/api/placeholder/400/300",
      description: "Perfect for the outdoors, combining ruggedness with comfort for long-lasting use."
    },
    { 
      id: 10, 
      name: "Product 10", 
      price: 55, 
      image: "/api/placeholder/400/300",
      description: "A sleek design and powerful functionality make this product a must-have for tech enthusiasts."
    },
    { 
      id: 11, 
      name: "Product 11", 
      price: 95, 
      image: "/api/placeholder/400/300",
      description: "An advanced product built with premium materials for exceptional performance and longevity."
    },
    { 
      id: 12, 
      name: "Product 12", 
      price: 65, 
      image: "/api/placeholder/400/300",
      description: "Designed for comfort and style, offering premium features and a modern look."
    },
    { 
      id: 13, 
      name: "Product 13", 
      price: 80, 
      image: "/api/placeholder/400/300",
      description: "High-tech gadget packed with features to make your life easier and more efficient."
    },
    { 
      id: 14, 
      name: "Product 14", 
      price: 100, 
      image: "/api/placeholder/400/300",
      description: "A perfect fusion of innovation and design, this product is built to impress."
    },
    { 
      id: 15, 
      name: "Product 15", 
      price: 70, 
      image: "/api/placeholder/400/300",
      description: "Premium quality and unique design, perfect for anyone looking for a stylish upgrade."
    },
    { 
      id: 16, 
      name: "Product 16", 
      price: 120, 
      image: "/api/placeholder/400/300",
      description: "Designed with the latest technology and the highest standards for performance."
    },
    { 
      id: 17, 
      name: "Product 17", 
      price: 85, 
      image: "/api/placeholder/400/300",
      description: "A versatile and reliable product that offers maximum convenience and utility."
    },
    { 
      id: 18, 
      name: "Product 18", 
      price: 90, 
      image: "/api/placeholder/400/300",
      description: "A stylish and efficient product that combines performance with elegance."
    },
    { 
      id: 19, 
      name: "Product 19", 
      price: 110, 
      image: "/api/placeholder/400/300",

description: "State-of-the-art product with exceptional functionality, designed for professionals."
    },
    { 
      id: 20, 
      name: "Product 20", 
      price: 130, 
      image: "/api/placeholder/400/300",
      description: "The ultimate product for tech lovers, offering unmatched performance and design."
    }
  ];
 return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer border text-center text-gray-100 border-gray-800 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-800 dark:bg-gray-900"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-300">${product.price}</p>
              <button 
                className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  ${selectedProduct.price}
                </p>
                <p className="text-gray-600 mb-6">
                  {selectedProduct.description}
                </p>
                <button 
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal 
        isOpen={showCheckoutModal} 
        onClose={() => setShowCheckoutModal(false)}
      >
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Item Added Successfully!
          </h3>
          <p className="text-gray-500">
            The item has been added to your cart.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductGrid;