package com.rosbank.hackathon;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
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
	
	@GetMapping("tickets/byId/{id}")
	String[] getChatHistory(@PathVariable Long id) {
		return repository.getChatById(id);
	}
	
	@PostMapping("tickets/newEntry/{name}")
	Ticket newTicket(@PathVariable String name, @RequestParam String date, @RequestParam String theme, @RequestParam(name = "chat") String[] chat) {
		
		//create new Ticket entry, set basic parameters
		Ticket newTicket = new Ticket(date, theme);
		newTicket.setChat(new LinkedList<String>(Arrays.asList(chat)));
			
		//calculate average emotional mood throughout the dialogue
		Iterator<String> iterator = newTicket.getChat().iterator();
		ArrayList<Float> emotions = new ArrayList<Float>();		
		while (iterator.hasNext()) {
			String chatEntry = iterator.next();
			byte[] response = (byte[]) template.convertSendAndReceive("user-messages", chatEntry);
			Float emotion = Float.parseFloat(new String(response));
			emotions.add(emotion);
		}
		Float average = (float) emotions.stream().mapToDouble(Float::doubleValue).average().orElse(0.0);
		newTicket.setEmotionPercent(average);		
		
		//set and update parent-child relations
		Client client = repositoryC.findByName(name);
		newTicket.setClient(client);
		Set<Ticket> updatedHistory = client.getClientHistory();
		updatedHistory.add(newTicket);
		client.setClientHistory(updatedHistory);
		Float updatedLoyalty = client.getLoyaltyPercent();
		updatedLoyalty = AverageLoyaltyCalculator.calculate(updatedHistory);
		client.setLoyaltyPercent(updatedLoyalty);	
		return repository.save(newTicket);		
	}
	
}	
