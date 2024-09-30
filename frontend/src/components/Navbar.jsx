import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useUser } from '../context/UserContext'; 
import { useCart } from '../context/CartContext'; 
const Navbar = () => {
    const navigate = useNavigate(); 
    const { cart, calculateTotal } = useCart(); 
    const { token } = useUser(); 

    return (
        <nav>
            <h2>Pizzería Mamma Mía</h2>
            <button onClick={() => navigate('/')}>🍕 Home</button>

            {token ? (
                <>
                    <button onClick={() => navigate('/profile')}>🔓 Profile</button>
                    <button onClick={() => { 
                        localStorage.removeItem('token'); 
                        navigate('/login'); 
                    }}>🔒 Logout</button>
                </>
            ) : (
                <>
                    <button onClick={() => navigate('/login')}>🔐 Login</button>
                    <button onClick={() => navigate('/register')}>🔐 Register</button>
                </>
            )}

            <button 
                className="navbar-button navbar-total" 
                onClick={() => navigate('/cart')}
            >
                🛒 Total: ${calculateTotal()} 
                <p>Items en el carrito: {cart.length}</p>
            </button>
        </nav>
    );
};

export default Navbar;
