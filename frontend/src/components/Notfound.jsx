import React from 'react'
import { Link } from 'react-router-dom'


const Notfound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! La página que buscas no existe.</p>
      <Link to="/" className="notfound-button">Volver al inicio</Link>
      <img 
        src="https://images.vexels.com/content/158207/preview/simple-sad-crying-emoticon-face-9f6829.png" 
        alt="Página no encontrada" 
        className="notfound-image"
      />
    </div>
  )
}

export default Notfound
