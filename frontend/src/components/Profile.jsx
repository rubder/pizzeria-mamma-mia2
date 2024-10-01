import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext'; 
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { email, token, logout, fetchUserProfile } = useContext(UserContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login'); 
    } else {
      fetchUserProfile(); 
    }
  }, [token, fetchUserProfile, navigate]);

  if (!token) {
    return <p>No estás autorizado para ver esta página. Por favor inicia sesión.</p>; 
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">Perfil de Usuario</h2>
      <p className="profile-email"><strong>Email:</strong> {email}</p>
      <button className="profile-button" onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
