package itch.alejo.alumno.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AlumnoDto {
    private Long id;
    private String nombreAlumno;
    private String apellidosAlumno;
    private String email;
}
