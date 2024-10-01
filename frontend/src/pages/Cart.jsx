import React, { useContext, useState } from 'react';
import { useCart } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 

const Cart = () => {
    const { cart, addToCart, removeFromCart, calculateTotal, clearCart } = useCart();
    const { token } = useContext(UserContext); 
    const [message, setMessage] = useState(''); 
    const [loading, setLoading] = useState(false);

   
    const handleCheckout = async () => {
        if (!token) return;

        setLoading(true);
        setMessage(''); 

        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cart: cart.map(item => ({ id: item.id, quantity: item.quantity })),
                }),
            });

            const data = await response.json(); 
            console.log('Respuesta del servidor:', data); 

            if (response.ok) {
                setMessage('Compra realizada con éxito. ¡Gracias por su pedido!');
                clearCart(); 
            } else {
                setMessage(`Error: ${data.message || 'Hubo un problema con la compra. Inténtalo nuevamente.'}`);
            }
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            setMessage('Error al procesar el pago. Por favor, inténtalo más tarde.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <h2>Detalle del pedido</h2>
            {cart.length > 0 ? (
                cart.map(pizza => (
                    <div key={pizza.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <img src={pizza.img} alt={pizza.name} style={{ width: '100px' }} />
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

            
            {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}

            <button 
                onClick={handleCheckout} 
                disabled={!token || cart.length === 0 || loading} 
                style={{ 
                    opacity: token && cart.length > 0 && !loading ? 1 : 0.5,
                    cursor: token && cart.length > 0 && !loading ? 'pointer' : 'not-allowed',
                }}
            >
                {loading ? 'Procesando...' : 'Pagar'}
            </button>
        </div>
    );
};

export default Cart;
