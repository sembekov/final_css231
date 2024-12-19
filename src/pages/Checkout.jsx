// Checkout.jsx
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold mb-4">Total: ${totalPrice}</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
