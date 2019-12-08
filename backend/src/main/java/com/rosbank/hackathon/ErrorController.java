package com.rosbank.hackathon;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
class ErrorController {
	
	String errorLog = null;
	
	@PostMapping("/newError")
	void newError(@RequestBody ErrorLog error) {
		errorLog = error.getLog();
	}
	
	@GetMapping("/getErrorLog")
	ErrorLog getErrorLog() {
		ErrorLog error = new ErrorLog();
		error.setLog(errorLog);
		errorLog = null;
		return error;
	}
	
}
