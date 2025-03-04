/*import React, {use, useEffect, useState} from 'react';*/
import React, { useEffect, useState } from 'react';
import { listAlumnos } from '../services/AlumnoServices';

export const ListaAlumnoComponent = () => {
    /*const datosFicticios = [
        { id: 1, nombreAlumno: "Juan", apellidoAlumno: "Perez", email: "juanito@gmail.com" },
        { id: 2, nombreAlumno: "Jorge", apellidoAlumno: "Vergara", email: "jorge@gmail.com" },
        { id: 3, nombreAlumno: "Lupe", apellidoAlumno: "Jacinto", email: "lupe@gmail.com" }
    ];*/
    const [Alumnos, setAlumnos] = useState([]);
    useEffect(() => {
        listAlumnos()
            .then((response) => {
                console.log(response.data);  // Verifica si los datos son correctos
                setAlumnos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const editarAlumno = (id) => {
        navigate(`/formularioA/${id}`); // Redirige a la página de edición con el ID
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
                                        onClick={() => editarAlumno(alumno.id)}>
                                        Editar
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