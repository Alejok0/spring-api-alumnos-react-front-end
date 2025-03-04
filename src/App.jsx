import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './PrimerEjem'
import ListaAlumnoComponent from './components/ListAlumnoComponent';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AlumnoComponet from './components/AlumnoComponet'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/*http:localhost:3000*/}
        <Route path='/' element={<Saludo></Saludo>} ></Route>

        {/*http:localhost:3000/alumnos*/}
        <Route path='/alumnos' element={<ListaAlumnoComponent></ListaAlumnoComponent>} ></Route>

        {/*http:localhost:3000/alumnos*/}
        <Route path='/formularioA' element={<AlumnoComponet></AlumnoComponet>} ></Route>

        {/*http:localhost:3000/alumnos/id*/}
        <Route path='/formularioA/{id}' element={<AlumnoComponet></AlumnoComponet>} ></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App;
