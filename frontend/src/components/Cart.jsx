import { useState } from "react";
import { pizzaCart } from '../data/pizzasCart';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(item.quantity - 1, 0) };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); 
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log('Total calculado:', total);
    return total.toFixed(2);
  };

  return (
    
      <div>
        <h2>Carrito de Compras</h2>
        {cart.length > 0 ? (
          cart.map((pizza) => (
            <div key={pizza.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
              <img src={pizza.img} alt={pizza.name} style={{ width: "100px" }} />
              <h3>{pizza.name}</h3>
              <p>{pizza.desc}</p>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.quantity}</p>
              <button onClick={() => increaseQuantity(pizza.id)}>+</button>
              <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
            </div>
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
        <h2>Total: ${calculateTotal()}</h2>
        {cart.length > 0 && <button>Pagar</button>}
      </div>
    );
    
};

export default Cart;
