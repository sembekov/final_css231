const Cart = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 25, quantity: 2 },
    { id: 2, name: "Product 2", price: 35, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-4">
          <span>
            {item.name} (x{item.quantity})
          </span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <hr className="my-4" />
      <h3 className="text-lg font-bold">Total: ${totalPrice}</h3>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
