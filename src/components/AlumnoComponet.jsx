import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { crearAlumno, editarAlumno } from "../services/AlumnoServices";

const AlumnoComponent = () => {
    const { id } = useParams();
    console.log("ID obtenido de useParams:", id);
    
    const navigate = useNavigate();

    const [nombreAlumno, setNombreAlumno] = useState('');
    const [apellidosAlumno, setApellidosAlumno] = useState('');
    const [email, setEmail] = useState('');
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (id) {
            setCargando(true);
            fetch(`http://127.0.0.1:8085/api/alumno/${id}`)
                .then(response => response.json())
                .then(data => {
                    setNombreAlumno(data.nombreAlumno);
                    setApellidosAlumno(data.apellidosAlumno);
                    setEmail(data.email);
                    setCargando(false);
                })
                .catch(error => {
                    console.error("Error al obtener los datos del alumno:", error);
                    setCargando(false);
                });
        }
    }, [id]);

    const saveAlumno = async (e) => {
        e.preventDefault();
        const alumno = { nombreAlumno, apellidosAlumno, email };

        try {
            if (id !== undefined) {  // Verificamos que `id` esté definido
                await editarAlumno(Number(id), alumno);
            } else {
                await crearAlumno(alumno);
            }
            navigate('/alumnos');
        } catch (error) {
            console.error("Error al guardar alumno:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">{id ? "Editar Alumno" : "Registrar Alumno"}</h2>

            {cargando ? (
                <div className="alert alert-info text-center">Cargando datos...</div>
            ) : (
                <form>
                    <div className="form-group row mb-3">
                        <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                value={nombreAlumno}
                                onChange={e => setNombreAlumno(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="apellidos" className="col-sm-2 col-form-label">Apellidos</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="apellidos"
                                value={apellidosAlumno}
                                onChange={e => setApellidosAlumno(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-warning btn-block mt-3 mb-4" 
                        onClick={saveAlumno}
                    >
                        {id ? "Actualizar Alumno" : "Registrar Alumno"}
                    </button>
                    <br></br>
                </form>
            )}
        </div>
    );
};

export default AlumnoComponent;
