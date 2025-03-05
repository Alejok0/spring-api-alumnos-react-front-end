import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className="navbar navbar-expand-lg" style={{ backgroundColor: '#fbc02d' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: '#333', fontWeight: 'bold' }}>Mi Encabezado</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ border: 'none', backgroundColor: 'transparent' }}>
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/')} style={{ color: '#333', fontSize: '1.1rem', cursor: 'pointer' }}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/alumnos')} style={{ color: '#333', fontSize: '1.1rem', cursor: 'pointer' }}>Alumnos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/formularioA')} style={{ color: '#333', fontSize: '1.1rem', cursor: 'pointer' }}>Formulario</a>
            </li>
          </ul>
          <button className="btn btn-dark" onClick={() => alert("Sesión cerrada")}>Cerrar sesión</button>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
