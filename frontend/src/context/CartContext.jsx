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

  // Lógica para añadir una pizza al carrito
    const addToCart = (pizza) => {
        setCart((prevCart) => {
            const existingPizza = prevCart.find(item => item.id === pizza.id);
            if (existingPizza) {
                // Incrementa la cantidad de la pizza existente sin límite
                return prevCart.map(item =>
                    item.id === pizza.id
                        ? { ...existingPizza, quantity: existingPizza.quantity + 1 }
                        : item
                );
            }
            // Si no existe, añádela con cantidad 1
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

export { CartContext };
