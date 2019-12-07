package com.rosbank.hackathon;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(exclude = "clientHistory")
@Entity
class Client {
	@Id @GeneratedValue private Long id;
	private String name;
	private String city;
	private String age;
	private Float loyaltyPercent;
	
	@OneToMany(mappedBy = "client")
	@JsonIgnore
	private Set<Ticket> clientHistory;
	
	
	Client() {}
	
	Client(String name, String city, String age, Ticket... clientHistory) {
		this.name = name;
		this.city = city;
		this.age = age;
		this.clientHistory = Stream.of(clientHistory).collect(Collectors.toSet());
		this.clientHistory.forEach(x -> x.setClient(this));
		
	}
	
	
	
}
