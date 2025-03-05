import React, { useEffect, useState } from 'react';
import { listAlumnos, eliminarAlumno } from '../services/AlumnoServices';
import { useNavigate } from 'react-router-dom';

export const ListaAlumnoComponent = () => {
    const [Alumnos, setAlumnos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarAlumnos();
    }, []);

    const cargarAlumnos = () => {
        listAlumnos()
            .then((response) => {
                setAlumnos(response.data);
            })
            .catch(error => {
                console.log("Error al obtener los alumnos:", error);
            });
    };

    const actualizaAlumno = (id) => {
        navigate(`/formularioA/${id}`); // Redirige a la página de edición con el ID
    };

    const eliminarAlumnoHandler = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este alumno?")) {
            try {
                await eliminarAlumno(id);
                cargarAlumnos(); // Recargar lista tras eliminar
            } catch (error) {
                console.error("Error al eliminar alumno:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Lista de alumnos</h1>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Id Alumno</th>
                            <th>Nombre Alumno</th>
                            <th>Apellido Alumno</th>
                            <th>Correo Alumno</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Alumnos.map((alumno) => (
                            <tr key={alumno.id}>
                                <td>{alumno.id}</td>
                                <td>{alumno.nombreAlumno}</td>
                                <td>{alumno.apellidosAlumno}</td>
                                <td>{alumno.email}</td>
                                <td>
                                    <button 
                                        className="btn btn-warning" 
                                        onClick={() => actualizaAlumno(alumno.id)}>
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-light text-danger border border-warning" 
                                        onClick={() => eliminarAlumnoHandler(alumno.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaAlumnoComponent;
