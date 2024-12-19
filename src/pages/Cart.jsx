import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeItem, totalPrice } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
