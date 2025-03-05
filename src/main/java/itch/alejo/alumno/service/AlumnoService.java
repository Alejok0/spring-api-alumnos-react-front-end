package itch.alejo.alumno.service;

import org.springframework.stereotype.Service;
import itch.alejo.alumno.dto.AlumnoDto;
import java.util.List;

@Service
public interface AlumnoService {
	AlumnoDto createAlumno (AlumnoDto alumnoDto);
	AlumnoDto getAlumnoById(Long alumnoId);
	
	//tercer metodo de la interfaz sevice
	List<AlumnoDto> getAllAlumno();
	
	//cuarto metodo del update
	AlumnoDto updateAlumno(Long alumnoId, AlumnoDto updateAlumno);
}
