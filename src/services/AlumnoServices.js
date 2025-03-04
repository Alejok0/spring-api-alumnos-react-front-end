import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/alumno";

export const listAlumnos = () => axios.get(REST_API_URL);

export const crearAlumno = (alumno) => axios.post(REST_API_URL, alumno);
export const editarAlumno = (alumno) => axios.put(`${REST_API_URL}/${alumno.id}`, alumno);