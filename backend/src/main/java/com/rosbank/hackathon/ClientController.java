package com.rosbank.hackathon;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
class ClientController {
	
	private final ClientRepository repositoryC;
	
	ClientController(ClientRepository repositoryC) {
		this.repositoryC = repositoryC;
	}
	
	@GetMapping("/clients/{name}")
	Client getByName(@PathVariable String name) {
		return repositoryC.findByName(name);
	}
	
	@PostMapping("/clients/newEntry")
	Client newClient(@RequestBody Client newClient) {
		newClient.setId(repositoryC.count() + 1);
		return repositoryC.save(newClient);
	}
	
	
}
