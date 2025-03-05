package itch.alejo.alumno.entitty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="alumno")
public class Alumno {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	//crear las columnas de la base de datos
	@Column(name="nombre_alumno")
	private String nombreAlumno;
	
	@Column(name="apellidos_alumno")
	private String apellidosAlumno;
	
	@Column(name="email", nullable=false, unique=true)
	private String email;
}

