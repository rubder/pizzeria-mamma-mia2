import React from 'react'


const Profile = ({ email, onLogout }) => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Perfil de Usuario</h2>
      <p className="profile-email"><strong>Email:</strong> {email}</p>
      <button className="profile-button" onClick={onLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile
