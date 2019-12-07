package com.rosbank.hackathon;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

interface TicketRepository extends JpaRepository<Ticket, Long> {
	
	@Query("SELECT t FROM Ticket t WHERE t.client.name = :name")
	List<Ticket> getClientHistory(String name);
	
	@Query("SELECT t.chat FROM Ticket t WHERE t.id = :id ")
	String[] getChatById(Long id);
}
