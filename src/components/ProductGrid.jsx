const ProductGrid = () => {
  const products = [
    { id: 1, name: "Product 1", price: 25, image: "/images/product.jpg" },
    { id: 2, name: "Product 2", price: 35, image: "/images/product.jpg" },
    { id: 3, name: "Product 3", price: 50, image: "/images/product.jpg" },
    { id: 4, name: "Product 4", price: 45, image: "/images/product.jpg" },
    { id: 5, name: "Product 5", price: 30, image: "/images/product.jpg" },
    { id: 6, name: "Product 6", price: 20, image: "/images/product.jpg" },
    { id: 7, name: "Product 7", price: 20, image: "/images/product.jpg" },
    { id: 8, name: "Product 8", price: 20, image: "/images/product.jpg" },
    { id: 9, name: "Product 9", price: 20, image: "/images/product.jpg" },
    { id: 10, name: "Product 10", price: 20, image: "/images/product.jpg" },
    { id: 11, name: "Product 11", price: 20, image: "/images/product.jpg" },
    { id: 12, name: "Product 12", price: 20, image: "/images/product.jpg" },
    { id: 13, name: "Product 13", price: 20, image: "/images/product.jpg" },
    { id: 14, name: "Product 14", price: 20, image: "/images/product.jpg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border text-center text-gray-100 border-gray-800 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-800 dark:bg-gray-900"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2"
          />
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-300">${product.price}</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
