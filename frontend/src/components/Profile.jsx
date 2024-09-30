
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; 
const Profile = () => {
  const { token, logout } = useContext(UserContext); 

  if (!token) {
    return <p>No estás autorizado para ver esta página. Por favor inicia sesión.</p>; 
  }

  const email = "user@example.com"; 

  return (
    <div className="profile-container">
      <h2 className="profile-title">Perfil de Usuario</h2>
      <p className="profile-email"><strong>Email:</strong> {email}</p>
      <button className="profile-button" onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;

