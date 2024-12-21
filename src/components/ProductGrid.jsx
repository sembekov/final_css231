import React, { useState } from "react";
import { X } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingContext";

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
  console.log("Shopping cart context:", shoppingCart);
  const { addToCart, cart } = shoppingCart;

  const handleProductClick = (product) => {
    console.log("Product clicked:", product);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    try {
      addToCart(product);
      console.log("Current cart after adding:", cart);
      setShowCheckoutModal(true);
      setTimeout(() => {
        setShowCheckoutModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const products = [
    {
      id: 1,
      name: "Towels",
      price: 25,
      image: "/assets/towels.webp",
      description:
        "Soft and absorbent towels, ideal for everyday use. These towels are made from 100% organic cotton for durability and comfort. They are perfect for the bathroom, kitchen or beach, combining style and functionality.",
    },
    {
      id: 2,
      name: "Dryer",
      price: 35,
      image: "/assets/dryer.webp",
      description:
        "A powerful and efficient dryer that quickly and gently dries clothes, bedding and other fabrics. Designed for ease of daily use, saving time and energy. Compact and modern design fits perfectly into any home environment.",
    },
    {
      id: 3,
      name: "Carpet",
      price: 45,
      image: "/assets/carpet.webp",
      description:
        "Engineered with precision, offering cutting-edge technology and high performaAn elegant and versatile rug that will become a stylish accent in your interior. Made from high quality materials for softness, durability and easy care. This rug is perfect for cozying up and adding warmth to any room.",
    },
    {
      id: 4,
      name: "Perfume",
      price: 60,
      image: "/assets/perfume.jpg",
      description:
        "An exquisite fragrance that highlights your individuality and creates an unforgettable aura of elegance. Carefully crafted with a balanced composition of fresh, floral, and warm notes, it is perfect for everyday wear and special occasions. This perfume embodies luxury and sophistication at its finest.",
    },
    {
      id: 5,
      name: "Robot cleaner",
      price: 50,
      image: "/assets/robot_cleaner.webp",
      description:
        "A smart and efficient cleaning solution designed to keep your home spotless with minimal effort. Equipped with advanced navigation technology, this robot cleaner seamlessly maneuvers around furniture and obstacles, ensuring a thorough clean in every corner. Ideal for busy lifestyles, it saves time while maintaining a pristine living space.",
    },
    {
      id: 6,
      name: "Iphone",
      price: 200,
      image: "/assets/iphone.webp",
      description:
        "The ultimate blend of cutting-edge technology and elegant design, the iPhone redefines what a smartphone can do. Featuring a stunning display, powerful performance, and an advanced camera system, it offers an unparalleled user experience. With seamless integration of hardware and software, the iPhone is built to keep you connected, productive, and entertained.",
    },
    {
      id: 7,
      name: "AirPods",
      price: 40,
      image: "/assets/AirPods.webp",
      description:
        "Experience wireless freedom with AirPods, delivering exceptional sound quality and effortless connectivity. Designed with advanced audio technology and a comfortable fit, they are perfect for music, calls, and more. With a sleek design, long-lasting battery life, and seamless integration with your devices, AirPods redefine the way you listen.",
    },
    {
      id: 8,
      name: "Mantle",
      price: 75,
      image: "/assets/mantle.webp",
      description:
        "A stylish and functional addition to your home, the mantle serves as the perfect centerpiece for your living space. Crafted with high-quality materials and timeless design, it complements any interior while providing a sturdy and elegant surface for displaying decor, photographs, or keepsakes. Its versatile style makes it a focal point that enhances the warmth and charm of your room.",
    },
    {
      id: 9,
      name: "Product 9",
      price: 30,
      image: "/api/placeholder/400/300",
      description:
        "Perfect for the outdoors, combining ruggedness with comfort for long-lasting use.",
    },
    {
      id: 10,
      name: "Product 10",
      price: 55,
      image: "/api/placeholder/400/300",
      description:
        "A sleek design and powerful functionality make this product a must-have for tech enthusiasts.",
    },
    {
      id: 11,
      name: "Product 11",
      price: 95,
      image: "/api/placeholder/400/300",
      description:
        "An advanced product built with premium materials for exceptional performance and longevity.",
    },
    {
      id: 12,
      name: "Product 12",
      price: 65,
      image: "/api/placeholder/400/300",
      description:
        "Designed for comfort and style, offering premium features and a modern look.",
    },
    {
      id: 13,
      name: "Product 13",
      price: 80,
      image: "/api/placeholder/400/300",
      description:
        "High-tech gadget packed with features to make your life easier and more efficient.",
    },
    {
      id: 14,
      name: "Product 14",
      price: 100,
      image: "/api/placeholder/400/300",
      description:
        "A perfect fusion of innovation and design, this product is built to impress.",
    },
    {
      id: 15,
      name: "Product 15",
      price: 70,
      image: "/api/placeholder/400/300",
      description:
        "Premium quality and unique design, perfect for anyone looking for a stylish upgrade.",
    },
    {
      id: 16,
      name: "Product 16",
      price: 120,
      image: "/api/placeholder/400/300",
      description:
        "Designed with the latest technology and the highest standards for performance.",
    },
    {
      id: 17,
      name: "Product 17",
      price: 85,
      image: "/api/placeholder/400/300",
      description:
        "A versatile and reliable product that offers maximum convenience and utility.",
    },
    {
      id: 18,
      name: "Product 18",
      price: 90,
      image: "/api/placeholder/400/300",
      description:
        "A stylish and efficient product that combines performance with elegance.",
    },
    {
      id: 19,
      name: "Product 19",
      price: 110,
      image: "/api/placeholder/400/300",

      description:
        "State-of-the-art product with exceptional functionality, designed for professionals.",
    },
    {
      id: 20,
      name: "Product 20",
      price: 130,
      image: "/api/placeholder/400/300",
      description:
        "The ultimate product for tech lovers, offering unmatched performance and design.",
    },
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
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Item Added Successfully!
          </h3>
          <p className="text-gray-500">The item has been added to your cart.</p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductGrid;
