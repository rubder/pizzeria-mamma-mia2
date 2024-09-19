import React from 'react';


const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card">
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <p>Precio: ${price.toLocaleString()}</p>
    <button>Ver más</button>
    <button>Añadir</button>
  </div>
);

export default CardPizza;
