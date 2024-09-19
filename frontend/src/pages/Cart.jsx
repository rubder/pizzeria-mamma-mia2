import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
  
    fetch('http://localhost:5000/api/pizzas')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos del carrito');
        }
        return response.json();
      })
      .then(data => {
        
        const updatedCart = data.map(pizza => ({
          ...pizza,
          quantity: 0  
        }));
        setCart(updatedCart);  
        setLoading(false); 
      })
      .catch(error => {
        setError(error.message); 
        setLoading(false);
      });
  }, []);

  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (loading) return <p>Cargando...</p>; 
  if (error) return <p>Error: {error}</p>; 

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h2>Detalle del pedido</h2>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div key={pizza.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <img src={pizza.img} alt={pizza.name} style={{ width: "100px" }} />
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price}</p>
            <p>Cantidad: {pizza.quantity}</p>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
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
