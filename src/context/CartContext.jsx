import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [add, setAdd] = useState([]);

  const addToCart = (product) => {
    setAdd((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setAdd((prevItems) => prevItems.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setAdd([]);
  };

  const value = {
    addToCart,
    removeFromCart,
    clearCart,
    cartItems: add,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
