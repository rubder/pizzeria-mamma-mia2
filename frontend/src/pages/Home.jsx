import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const { addToCart } = useCart();

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
                        id={pizza.id} 
                        name={`🍕 ${pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}`}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                        onAddToCart={() => addToCart(pizza)}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
