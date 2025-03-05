import axios from "axios";

const REST_API_URL = "http://127.0.0.1:8085/api/alumno";

export const listAlumnos = () => axios.get(REST_API_URL);

export const crearAlumno = (alumno) => axios.post(REST_API_URL, alumno);
export const editarAlumno = (id, alumno) => axios.put(`${REST_API_URL}/${id}`, alumno);
export const eliminarAlumno = (id) => axios.delete(`${REST_API_URL}/${id}`);
