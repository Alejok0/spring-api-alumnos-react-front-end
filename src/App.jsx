import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './PrimerEjem'
import ListaAlumnoComponent from './components/ListAlumnoComponent';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlumnoComponent from './components/AlumnoComponet'  // Asegúrate de renombrar el archivo a `AlumnoComponent.jsx`

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<Saludo />} />

          {/* http://localhost:3000/alumnos */}
          <Route path='/alumnos' element={<ListaAlumnoComponent />} />

          {/* http://localhost:3000/formularioA */}
          <Route path='/formularioA' element={<AlumnoComponent />} />

          {/* http://localhost:3000/formularioA/:id */}
          <Route path='/formularioA/:id' element={<AlumnoComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App;
