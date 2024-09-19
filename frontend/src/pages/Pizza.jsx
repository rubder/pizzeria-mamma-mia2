
import React, { useEffect, useState } from 'react';



const Pizza = () => {
  const [pizza, setPizza] = useState(null);  
  const [error, setError] = useState(null);  
  const pizzaId = 'p001';  

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al obtener la pizza con ID ${pizzaId}`);
        }
        return response.json();
      })
      .then(data => setPizza(data))
      .catch(error => setError(error.message));
  }, [pizzaId]);

  if (error) return <p>Error: {error}</p>;  
  if (!pizza) return <p>Cargando...</p>;  

  return (
    <div className="pizza-details">
      <img src={pizza.img} alt={pizza.name} style={{ width: '300px', height: 'auto' }} />  
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>  
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
