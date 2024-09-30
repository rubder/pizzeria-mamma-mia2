// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
    return useContext(CartContext);
};

// Componente proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existingPizza = prevCart.find(item => item.id === pizza.id);
            if (existingPizza) {
                return prevCart.map(item =>
                    item.id === pizza.id
                        ? { ...existingPizza, quantity: existingPizza.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...pizza, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
      setCart(prevCart => 
        prevCart.map(pizza => 
          pizza.id === id
            ? { ...pizza, quantity: pizza.quantity > 1 ? pizza.quantity - 1 : 0 } 
            : pizza
        ).filter(pizza => pizza.quantity > 0) 
      );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
