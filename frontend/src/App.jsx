import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './components/Profile';
import Notfound from './components/Notfound';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
