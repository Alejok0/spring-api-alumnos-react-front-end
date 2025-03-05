package itch.alejo.alumno.service.impl;

import java.util.List;
import java.util.stream.Collectors;

/*
import org.springframework.stereotype.Service;
import edu.esme.dto.AlumnoDto;
import edu.esme.entity.Alumno;
import edu.esme.mapper.AlumnoMapper;
import edu.esme.repository.AlumnoRepository;
import edu.esme.service.AlumnoService;

@Service
public class AlumoServiceImpl implements AlumnoService{
	
	private AlumnoRepository alumnoRepository;

	public AlumnoDto createAlumno(AlumnoDto alumnoDto) {
		Alumno alumno=AlumnoMapper.mapToAlumno(alumnoDto);
		Alumno savedAlumno=alumnoRepository.save(alumno);
		return AlumnoMapper.mapToAlumnoDto(savedAlumno);
	}
	
}
*/
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import itch.alejo.alumno.dto.AlumnoDto;
import itch.alejo.alumno.entitty.Alumno;
import itch.alejo.alumno.exception.ResouserNotFoundException;
import itch.alejo.alumno.mapper.AlumnoMapper;
import itch.alejo.alumno.repository.AlumnoRepository;
import itch.alejo.alumno.service.AlumnoService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AlumnoServiceImpl implements AlumnoService {

    private final AlumnoRepository alumnoRepository;

    @Override
    @Transactional
    public AlumnoDto createAlumno(AlumnoDto alumnoDto) {
        Alumno alumno = AlumnoMapper.mapToAlumno(alumnoDto);
        Alumno savedAlumno = alumnoRepository.save(alumno);
        return AlumnoMapper.mapToAlumnoDto(savedAlumno);
    }
    
    @Override
    public AlumnoDto getAlumnoById(Long alumnoId) {
    	Alumno alumno = alumnoRepository.findById(alumnoId).orElseThrow(() -> 
    					new ResouserNotFoundException("No hay alumno con ese id: " + alumnoId));
    	return AlumnoMapper.mapToAlumnoDto(alumno);
     }
    
    @Override
    public List<AlumnoDto> getAllAlumno(){
    	List<Alumno> alumnos=alumnoRepository.findAll();
    	return alumnos.stream().map((alumno) -> AlumnoMapper.mapToAlumnoDto(alumno))
    			.collect(Collectors.toList());
    }
    
    @Override
    public AlumnoDto updateAlumno(Long alumnoId, AlumnoDto updateAlumno) {
    	Alumno alumno=alumnoRepository.findById(alumnoId).orElseThrow(
    			() -> new ResouserNotFoundException("el alumno no existe: "+ alumnoId));
    	alumno.setNombreAlumno(updateAlumno.getNombreAlumno());
    	alumno.setApellidosAlumno(updateAlumno.getApellidosAlumno());
    	alumno.setEmail(updateAlumno.getEmail());
    	Alumno updateAlumnoObj = alumnoRepository.save(alumno);
    	return AlumnoMapper.mapToAlumnoDto(updateAlumnoObj);
    }
}
