package itch.alejo.alumno.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import itch.alejo.alumno.service.AlumnoService;
import itch.alejo.alumno.dto.AlumnoDto;
import lombok.AllArgsConstructor;

/*
@AllArgsConstructor
@RestController
@RequestMapping("/api/alumno")
public class AlumnoController {
	
	private AlumnoService alumnoService;
	
	//contruir la api rest
	@PostMapping
	public ResponseEntity<AlumnoDto> createAlumno(@RequestBody AlumnoDto alumnoDto){
		AlumnoDto saveAlumno=alumnoService.createAlumno(alumnoDto);
		return new ResponseEntity<>(saveAlumno, HttpStatus.CREATED);
	}	
}
*/
@AllArgsConstructor
@RestController
@RequestMapping("/api/alumno")
public class AlumnoController {

    private final AlumnoService alumnoService;

    @PostMapping
    public ResponseEntity<AlumnoDto> createAlumno(@RequestBody AlumnoDto alumnoDto) {
        AlumnoDto saveAlumno = alumnoService.createAlumno(alumnoDto);
        return new ResponseEntity<>(saveAlumno, HttpStatus.CREATED);
    }
    
    //contruir get alumno rest api, buscador del id
    @GetMapping("{id}")
    public ResponseEntity<AlumnoDto> getAlumnoById(@PathVariable("id") Long alumnoId){
    	AlumnoDto alumnoDto = alumnoService.getAlumnoById(alumnoId);
    	return ResponseEntity.ok(alumnoDto);
    }
    
    //contruir el get para todos los alumnos REST api
    @GetMapping
    public ResponseEntity<List<AlumnoDto>> getAllAlumnos(){
    	List<AlumnoDto> alumnos = alumnoService.getAllAlumno();
    	return ResponseEntity.ok(alumnos);
    }
    
    //construir update alumno REST API
    @PutMapping("{id}")
    public ResponseEntity<AlumnoDto> updateAlumno(@PathVariable("id") Long alumnoId, 
    		@RequestBody AlumnoDto updateAlumno){
    	AlumnoDto alumnoDto=alumnoService.updateAlumno(alumnoId, updateAlumno);
		return ResponseEntity.ok(alumnoDto);
    }
    
}

