import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './components/Profile';
import Notfound from './components/Notfound';
import PrivateRoute from './components/PrivateRoute'; 
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext'; 

function App() {
    return (
      <UserProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:pizzaId" element={<Pizza />} /> 

            
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    );
}

export default App;
