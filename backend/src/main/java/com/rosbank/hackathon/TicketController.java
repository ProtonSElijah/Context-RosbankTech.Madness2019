package com.rosbank.hackathon;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
class TicketController {
	
	private final TicketRepository repository;
	private final ClientRepository repositoryC;
	
	@Autowired
	RabbitTemplate template;
	
	TicketController (TicketRepository repository, ClientRepository repositoryC) {
		this.repository = repository;
		this.repositoryC = repositoryC;
	}
	
	
	@GetMapping("/tickets/byName/{clientName}")
	List<Ticket> getClientHistory(@PathVariable String clientName) {
		return repository.getClientHistory(clientName);
	}
	
	//get chat history of the entry
	@GetMapping("/tickets/byId/{id}")
	String[] getChatHistory(@PathVariable Long id) {
		return repository.getChatById(id);
	}
	
	@PostMapping("/tickets/newEntry/{name}")
	Ticket newTicket(@PathVariable String name, @RequestBody Ticket newTicket) {
		newTicket.setId(repository.count() + 1);
				
		//calculate average emotional mood throughout the dialogue		
		String chatEntry = newTicket.getChat();
		ArrayList<Float> emotions = new ArrayList<Float>();
		byte[] response = (byte[]) template.convertSendAndReceive("user-messages", chatEntry);
		Float emotion = Float.parseFloat(new String(response));
		emotions.add(emotion);
		Float average = (float) emotions.stream().mapToDouble(Float::doubleValue).average().orElse(0.0);
		newTicket.setToxicPercent(average);
		
		//set and update parent-child relations
		Client client = repositoryC.findByName(name);
		newTicket.setClient(client);
		Set<Ticket> updatedHistory = client.getClientHistory();
		updatedHistory.add(newTicket);
		client.setClientHistory(updatedHistory);
		Float updatedLoyalty = client.getToxicPercent();
		updatedLoyalty = AverageLoyaltyCalculator.calculate(updatedHistory);
		client.setToxicPercent(updatedLoyalty);	
		return repository.save(newTicket);		
	}
	
}	
