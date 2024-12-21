import React from 'react';
import { useShoppingCart } from '../context/ShoppingContext';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderStatusBadge = ({ status }) => {
  const statusStyles = {
    processing: "bg-yellow-100 text-yellow-800",
    shipped: "bg-blue-100 text-blue-800",
    delivered: "bg-green-100 text-green-800",
    pending: "bg-gray-100 text-gray-800"
  };

  const statusIcons = {
    processing: <Clock className="w-4 h-4" />,
    shipped: <Truck className="w-4 h-4" />,
    delivered: <CheckCircle className="w-4 h-4" />,
    pending: <Package className="w-4 h-4" />
  };

  const statusText = {
    processing: "In processing",
    shipped: "In the way",
    delivered: "Delivered",
    pending: "Awaiting"
  };

  return (
    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
      {statusIcons[status]}
      {statusText[status]}
    </span>
  );
};

const OrderHistory = () => {
  const { orderHistory } = useShoppingCart();

  const getOrderStatus = (orderId) => {
    const statuses = ['processing', 'shipped', 'delivered', 'pending'];
    return statuses[orderId % statuses.length];
  };

  if (orderHistory.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Мои заказы</h1>
        <div className="text-center py-12">
          <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-medium text-gray-600 mb-2">Заказов пока нет</h2>
          <p className="text-gray-500">История ваших заказов появится здесь</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My orders</h1>
      <div className="space-y-6">
        {orderHistory.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold">Order №{order.id}</h2>
                <p className="text-gray-600">Decorated {order.date}</p>
              </div>
              <OrderStatusBadge status={getOrderStatus(order.id)} />
            </div>
            
            <div className="border-t border-gray-200 mt-4 pt-4">
              <h3 className="font-medium mb-3">Order Detais</h3>
              <div className="space-y-4">
                {order.products.map((product) => (
                  <div key={product.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-gray-600">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{(product.price * product.quantity).toFixed(2)} ₽</p>
                      <p className="text-sm text-gray-600">{product.price} $ per piece</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold">{order.total.toFixed(2)} ₽</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;