import React, { createContext, useContext, useState } from 'react';

const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  const checkout = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      items: cart.length,
      total: total,
      products: [...cart]
    };
    
    setOrderHistory(prev => [newOrder, ...prev]);
    setCart([]); // Clear cart after checkout
    return newOrder;
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingContext.Provider value={{
      cart,
      orderHistory,
      addToCart,
      removeFromCart,
      updateQuantity,
      checkout,
      clearCart
    }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingProvider');
  }
  return context;
};