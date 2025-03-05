package itch.alejo.alumno.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResouserNotFoundException extends RuntimeException{
	
	public ResouserNotFoundException(String message) {
		super(message);
	}
}

