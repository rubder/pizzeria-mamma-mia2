import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); 

  const total = 25000;
  const token = false;

  return (
    <nav>
      <h2>Pizzería Mamma Mía</h2>
      <button onClick={() => navigate('/')}>🍕 Home</button>
      {token ? (
        <>
          <button onClick={() => navigate('/profile')}>🔓 Profile</button>
          <button>🔒 Logout</button>
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
        🛒 Total: ${total.toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;


  