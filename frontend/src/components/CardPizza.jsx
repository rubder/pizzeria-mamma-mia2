import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, img, onAddToCart }) => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>Precio: ${price.toLocaleString()}</p>
            <button onClick={onAddToCart}>Añadir</button>
            <button onClick={() => navigate(`/pizza/${id}`)}>Detalle</button>
        </div>
    );
};

export default CardPizza;
