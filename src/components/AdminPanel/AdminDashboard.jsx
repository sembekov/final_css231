import React from "react";
import ProductManager from "./ProductManager";
import OrderManager from "./OrderManager";

function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manage Products</h2>
          <ProductManager />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Manage Orders</h2>
          <OrderManager />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
