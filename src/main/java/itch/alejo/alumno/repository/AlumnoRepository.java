package itch.alejo.alumno.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import itch.alejo.alumno.entitty.Alumno;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
}
