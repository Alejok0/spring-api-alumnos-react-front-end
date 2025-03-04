import React from 'react';

function HeaderComponent() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1eb3a6' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: '#a9e0d5' }}>Mi Encabezado</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Materias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Alumnos</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;