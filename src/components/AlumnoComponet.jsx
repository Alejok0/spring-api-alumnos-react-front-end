import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { crearAlumno, editarAlumno } from "../services/AlumnoServices";
import { useNavigate } from "react-router-dom";

export const AlumnoComponent = () => {

    const [nombreAlumno, setNombreAlumno] = useState('')
    const [apellidosAlumno, setApellidosAlumno] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        nombreAlumno: '',
        apellidosAlumno: '',
        email: ''
    })

    function validaForm(){
        let valid = true;
        const errorsCopy = {...errors}
        if(nombreAlumno.trim()){
            errorsCopy.nombreAlumno = '';
        }else{
            errorsCopy.nombreAlumno = 'El nombre es requerido';
            valid = false
        }
        if(apellidosAlumno.trim()){
            errorsCopy.apellidosAlumno = '';
        }else{
            errorsCopy.apellidosAlumno = 'El apellido es requerido';
            valid = false
        }
        if(email.trim()){
            errorsCopy.email = '';
        }else{
            errorsCopy.email = 'El email es requerido';
            valid = false
        }
        setErrors(errorsCopy);
        return valid;
    }
    
    const navegar = useNavigate();
    const { id } = useParams();

    const actualizarNombreAlumno = (e) => setNombreAlumno(e.target.value);
    const actualizarApellidosAlumno = (e) => setApellidosAlumno(e.target.value);
    const actualizarEmailAlumno = (e) => setEmail(e.target.value);

    function saveAlumno(e){
        e.preventDefault();

        if(validaForm()){
            const alumno = {nombreAlumno, apellidosAlumno, email}
            console.log(alumno)
            if(id){
                editarAlumno(alumno)
                .then((response) => {
                    console.log(response.data);
                    navegar('/alumnos')
                })
            }else{
                crearAlumno(alumno)
                .then((response) => {
                    console.log(response.data);
                    navegar('/alumnos')
                })
            }
        }
    }

    return (
        <div class="container mt-5">
        <h2 class="text-center mb-4">{id ? "Editar Alumno" : "Registrar Alumno"}</h2>
        <form>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" 
                className={`form-control ${errors.nombreAlumno ? 'is-invalid' : ''}`} 
                id="nombre" 
                placeholder="Ingresa nombre alumno"
                name='NombreAlumno'
                value={nombreAlumno}
                onChange={actualizarNombreAlumno}> 
                </input>
                {errors.nombreAlumno && <div className='invalid-feedback'>{errors.nombreAlumno}</div>}
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input type="text" 
                className={`form-control ${errors.apellidosAlumno ? 'is-invalid' : ''}`} 
                id="apellidos" 
                placeholder="Apellidos de alumnos"
                name='ApellidosAlumno'
                value={apellidosAlumno}
                onChange={actualizarApellidosAlumno}>
                </input>
                {errors.apellidosAlumno && <div className='invalid-feedback'>{errors.apellidosAlumno}</div>}
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" 
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email" 
                placeholder="Ingresa tu email"
                name='email'
                value={email}
                onChange={actualizarEmailAlumno}>
                </input>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <button type="submit" class="btn btn-primary btn-block" onClick={saveAlumno} >Enviar</button>
        </form>
    </div>
    )}

export default AlumnoComponent;