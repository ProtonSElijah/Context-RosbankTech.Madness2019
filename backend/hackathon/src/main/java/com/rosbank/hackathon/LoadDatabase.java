package com.rosbank.hackathon;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {
	
	@Bean 
	CommandLineRunner initDatabase(ClientRepository repository, TicketRepository repositoryT) {
		return args -> {
			Ticket T = new Ticket("34", "34");
			Ticket G = new Ticket("34", "34");
			repository.save(new Client("Васян", "СПБ", "34", T));			
			repository.save(new Client("Стасян", "СПБ", "34", G));
			repositoryT.save(T);
			repositoryT.save(G);
		};
	}
}


