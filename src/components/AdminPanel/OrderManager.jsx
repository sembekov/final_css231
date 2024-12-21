import React, { useState } from "react";

function OrderManager() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Alice", total: 500, status: "Delivered" },
    { id: 2, customer: "Bob", total: 250, status: "Processing" },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Customer</th>
            <th className="border border-gray-300 p-2">Total</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border border-gray-300 p-2">{order.id}</td>
              <td className="border border-gray-300 p-2">{order.customer}</td>
              <td className="border border-gray-300 p-2">${order.total}</td>
              <td className="border border-gray-300 p-2">{order.status}</td>
              <td className="border border-gray-300 p-2">
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  className="border p-1 rounded"
                >
                  <option value="Delivered">Delivered</option>
                  <option value="Processing">Processing</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManager;
