import React, { useEffect, useState } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const pizzaId = 'p001';  // Usamos un ID fijo por ahora

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [pizzaId]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="pizza-details">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price.toLocaleString()}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
