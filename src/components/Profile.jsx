import React from "react";
import { useShoppingCart } from '../context/ShoppingContext';

const Profile = () => {
  const { orderHistory } = useShoppingCart();
  const user = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Order History</h2>
        {orderHistory.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orderHistory.map(order => (
            <div
              key={order.id}
              className="border-b py-4"
            >
              <p className="font-semibold">Order #{order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
              <p>Items: {order.items}</p>
              <div className="mt-2">
                <p className="font-medium">Products:</p>
                <ul className="ml-4">
                  {order.products.map(product => (
                    <li key={product.id}>
                      {product.name} x {product.quantity} - ${(product.price * product.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;