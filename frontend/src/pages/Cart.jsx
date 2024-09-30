import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 
const Cart = () => {
    const { cart, addToCart, removeFromCart, calculateTotal } = useCart();
    const { token } = useContext(UserContext); 
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
            <button disabled={!token} style={{ opacity: token ? 1 : 0.5 }}>
                Pagar
            </button>
        </div>
    );
};

export default Cart;
