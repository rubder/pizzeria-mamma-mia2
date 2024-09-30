import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 

const Pizza = () => {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext); 
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

    const handleAddToCart = () => {
        addToCart(pizza);
    };

    return (
        <div className="pizza-details-container">
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
                <button onClick={handleAddToCart}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default Pizza;
