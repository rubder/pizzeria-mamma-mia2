import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, addToCart, removeFromCart, calculateTotal } = useCart();

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <h2>Detalle del pedido</h2>
            {cart.length > 0 ? (
                cart.map(pizza => (
                    <div key={pizza.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                        <img src={pizza.img} alt={pizza.name} style={{ width: "100px" }} />
                        <h3>{pizza.name}</h3>
                        <p>Precio: ${pizza.price.toLocaleString()}</p>
                        <p>Cantidad: {pizza.quantity}</p>
                        <button onClick={() => addToCart(pizza)}>+</button>
                        <button onClick={() => removeFromCart(pizza.id)}>-</button>
                    </div>
                ))
            ) : (
                <p>El carrito está vacío.</p>
            )}
            <h2 style={{ color: 'black' }}>Total: ${calculateTotal()}</h2>
            {cart.length > 0 && <button>Pagar</button>}
        </div>
    );
};

export default Cart;
