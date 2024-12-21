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
      name: "Shirt",
      price: 30,
      image: "/assets/Shirt.webp",
      description:
        "A timeless wardrobe essential, this shirt combines comfort and style effortlessly. Made from high-quality, breathable fabric, it ensures a perfect fit and long-lasting wear. Whether for formal occasions or casual outings, its versatile design and attention to detail make it an ideal choice for any setting.",
    },
    {
      id: 10,
      name: "Jacket",
      price: 55,
      image: "/assets/Jacket.webp",
      description:
        "A perfect combination of style and functionality, this jacket is designed to keep you warm and comfortable in any weather. Crafted from premium materials, it offers durability and a sleek, modern look. Whether for casual wear or outdoor adventures, this jacket ensures you stay protected while maintaining a sophisticated style.",
    },
    {
      id: 11,
      name: "TV",
      price: 950,
      image: "/assets/TV.webp",
      description:
        "Immerse yourself in stunning visuals and exceptional clarity with this high-definition TV. Equipped with advanced display technology, it delivers vibrant colors, deep contrasts, and smooth motion for an unparalleled viewing experience. Perfect for movies, gaming, or streaming, this sleek and modern TV combines cutting-edge performance with elegant design to enhance any living space.",
    },
    {
      id: 12,
      name: "Hoodie",
      price: 65,
      image: "/assets/hoodie.webp",
      description:
        "Stay cozy and stylish with this versatile hoodie, crafted for ultimate comfort and durability. Made from premium, soft-touch fabric, it provides warmth while allowing breathability. Perfect for casual outings or relaxing at home, its modern design and relaxed fit make it an essential addition to your wardrobe.",
    },
    {
      id: 13,
      name: "Monitor",
      price: 400,
      image: "/assets/Monitor.jpg",
      description:
        "Experience exceptional clarity and precision with this high-performance monitor. Designed for work, gaming, or entertainment, it features a vibrant display with sharp resolution and rich colors. With ergonomic adjustments and sleek design, this monitor combines functionality and style to enhance your productivity and viewing experience.",
    },
    {
      id: 14,
      name: "Computer",
      price: 100,
      image: "/assets/Computer.jpg",
      description:
        "A powerful and reliable computer built to handle everything from everyday tasks to demanding applications. Featuring high-speed performance, ample storage, and advanced graphics, it’s perfect for work, gaming, or creative projects. With its sleek design and cutting-edge technology, this computer delivers efficiency and versatility in one sophisticated package.",
    },
    {
      id: 15,
      name: "Adapter",
      price: 70,
      image: "/assets/Adapter.jpg",
      description:
        "The Apple 18W USB-C Power Adapter is a compact and efficient charger designed to charge your devices quickly and efficiently.This 18W adapter is suitable for the following models:Apple Iphone 7/8/8 plus, iphone 10, XR, 11, 11 pro, 11pro max, 12, 12 pro, 12 pro max, iphone 13, 13 pro, 13 pro max, 14, 14 pro, 14 pro max, iPhone 15, 15 pro, 15 pro max, iPhone 16/16 plus/16 pro/16 pro max",
    },
    {
      id: 16,
      name: "Apple Lightning",
      price: 120,
      image: "/assets/Apple_lightning.jpg",
      description:
        "The 1 m Apple USB Type-C to Lightning cable is convenient for connecting an iPhone, iPad or iPod with a Lightning connector to devices with a USB Type-C or Thunderbolt 3 port for synchronization and charging, or to an Apple USB Type-C 18-watt power adapter. W, 20 W, 29 W, 30 W, 61 W, 87 W or 96 W.",
    },
    {
      id: 17,
      name: "Kettle",
      price: 85,
      image: "/assets/Kettle.jpg",
      description:
        "Effortlessly prepare hot beverages with this sleek and efficient kettle. Designed with durable materials and advanced safety features, it boils water quickly while ensuring ease of use. Its modern design and convenient functionality make it a perfect addition to any kitchen or office setup.",
    },
    {
      id: 18,
      name: "Washing machine",
      price: 900,
      image: "/assets/Washing_machine.jpg",
      description:
        "The LG F2M5HS6S washing machine in black and silver is an ideal choice for a large family due to its ability to wash up to 7 kg of laundry per cycle. This allows you to simultaneously clean two sets of bedding, a large blanket or a down jacket inside. The model is powered by an inverter motor, has control using a rotary mechanism and a display that displays all the information the user needs.",
    },
    {
      id: 19,
      name: "Sharm box",
      price: 110,
      image: "/assets/Sharm.jpg",
      description:
        "A beautifully crafted charm box designed to store and showcase your precious keepsakes and jewelry. Featuring an elegant design with intricate details, it combines functionality with style. Perfect for organizing small treasures, it makes a thoughtful gift or a luxurious addition to your personal collection.",
    },
    {
      id: 20,
      name: "Chair",
      price: 30,
      image: "/assets/Chair.jpg",
      description:
        "A perfect blend of comfort and style, this chair is designed to support you through long hours of work or relaxation. Crafted with high-quality materials, it offers ergonomic features and a sturdy build, ensuring durability and ease of use. Its modern design makes it a versatile addition to any home or office space.",
    },

    {
      id: 21,
      name: "Smart Wath",
      price: 30,
      image: "/assets/Smart_w.jpg",
      description:
        "Stay connected and on track with these advanced smartwatches, combining cutting-edge technology with stylish design. Featuring health monitoring, fitness tracking, and seamless notifications, they help you manage your daily activities with ease. Durable, versatile, and user-friendly, these smartwatches are the ultimate companion for an active and productive lifestyle.",
    },

    {
      id: 22,
      name: "Farmstay fabric Real Peach",
      price: 30,
      image: "/assets/FarmStay.jpg",
      description:
        "A mask with peach extract nourishes and energizes the skin, making it smooth and silky. Peach fruit extract has a softening and tonic effect on the skin.Directions for use: Apply a fabric mask to previously cleansed facial skin and spread evenly, leave until full effect is achieved for no more than 30 minutes, distribute the remaining essence with massage movements over the skin of the face, neck and décolleté.'",
    },

    {
      id: 23,
      name: "Blender",
      price: 50,
      image: "/assets/Blender.jpg",
      description:
        "Blender 2 in 1. Blender + chopper (coffee grinder), 3 speeds + pulse, glass flask, silver color.",
    },

    {
      id: 24,
      name: "Hand Mixer",
      price: 30,
      image: "/assets/Hand_Mixer.jpg",
      description:
        "The device allows you to whip cocktails and mousses, and efficiently knead stiff shortbread and elastic yeast dough.",
    },

    {
      id: 25,
      name: "Smart speaker",
      price: 79,
      image: "/assets/Smart_s.jpg",
      description:
        "The smart speaker New Yandex.Station Mini YNDX-00020K, black, is equipped with an LED display on the front side. It shows time, timer and weather. The 10W speaker system produces clear sound with spatial effect.",
    },

    {
      id: 26,
      name: "Apple case",
      price: 30,
      image: "/assets/Case_A.jpg",
      description:
        "Lightweight, but at the same time extremely reliable case for Apple iPhone 11. Reinforced corners of the case - reduce impact force by 30%. Full camera protection and protruding edges above the screen surface provide additional protection for the phone's screen and camera. Crystal-transparent, thin and plastic material tightly fits the body of the smartphone, preserving the style and individuality of the gadget.",
    },

    {
      id: 27,
      name: "Smart Wath",
      price: 30,
      image: "/assets/Chair.jpg",
      description:
        "",
    },

    {
      id: 28,
      name: "Smart Wath",
      price: 30,
      image: "/assets/Smart_W.jpg",
      description:
        "",
    },

    {
      id: 29,
      name: "Microwave",
      price: 30,
      image: "/assets/Micro.jpg",
      description:
        "The LG MS-2042DB microwave oven is made in a stylish black color, which makes it universal for any kitchen design. The device will especially appeal to those consumers who value minimalism and strict lines above all else in household appliances. The glossy front surface gives the unit solidity.",
    },

    {
      id: 30,
      name: "Thermos",
      price: 30,
      image: "/assets/thermos.jpg",
      description:
        "Keep your beverages at the perfect temperature for hours with this high-quality thermos. Designed with double-wall insulation, it maintains the heat or cold, ensuring your drinks stay fresh and enjoyable. Durable, leak-proof, and easy to carry, this thermos is ideal for work, travel, or outdoor adventures.",
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
