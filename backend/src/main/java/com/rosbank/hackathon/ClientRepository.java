package com.rosbank.hackathon;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

interface ClientRepository extends JpaRepository<Client, Long>{
	
	@Query("SELECT c FROM Client c WHERE c.name = :name")
	Client findByName(String name);
	
	@Query("SELECT c FROM Client c WHERE c.id = :id")
	Client getById(Long id);
}
