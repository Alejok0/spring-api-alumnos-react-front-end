package itch.alejo.alumno.mapper;

import itch.alejo.alumno.dto.AlumnoDto;
import itch.alejo.alumno.entitty.Alumno;

public class AlumnoMapper {
	
	public static AlumnoDto mapToAlumnoDto(Alumno alumno) {
		return new AlumnoDto(
				alumno.getId(),
				alumno.getNombreAlumno(),
				alumno.getApellidosAlumno(),
				alumno.getEmail()
		);
	}
	
	public static Alumno mapToAlumno(Alumno alumnoDto) {
		return new Alumno(
				alumnoDto.getId(),
				alumnoDto.getNombreAlumno(),
				alumnoDto.getApellidosAlumno(),
				alumnoDto.getEmail()
		);
	}
}
