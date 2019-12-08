/*package com.rosbank.hackathon;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {
	
	@Bean 
	CommandLineRunner initDatabase(ClientRepository repository, TicketRepository repositoryT) {
		return args -> {
			Ticket T = new Ticket((long)1 ,"34", "34");
			Ticket G = new Ticket((long)2,"12", "45");
			Ticket H = new Ticket((long)3,"25", "78");
			repository.save(new Client((long)1, "Васян", "СПБ", "34", "https://i.ytimg.com/vi/3mql06x814Q/hqdefault.jpg", T));			
			repository.save(new Client((long)2, "Стасян", "СПБ", "34", "https://static.mk.ru/upload/entities/2018/05/30/articles/detailPicture/b0/83/29/dc/fed85bc681baf67a982c3fa3e2155f84.jpg", G));
			repository.save(new Client((long)3, "Басян", "СПБ", "45", "http://planetakartinok.net/uploads/photos/show/2198_22_1125_ob.jpg", H));
			repositoryT.save(T);
			repositoryT.save(G);
			repositoryT.save(H);
		};
	}
}*/


