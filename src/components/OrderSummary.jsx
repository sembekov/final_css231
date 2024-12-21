import React from "react";

function OrderSummary({ items, total }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default OrderSummary;
