import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  // Fetch de la API de pizzas
  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="pizza-container">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={`🍕 ${pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}`}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
