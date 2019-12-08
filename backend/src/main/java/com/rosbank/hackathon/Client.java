package com.rosbank.hackathon;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(exclude = "clientHistory")
@Entity
class Client {
	@Id private Long id;
	private String name;
	private String picURL;
	private String city;
	private String age;
	private Float toxicPercent = (float) 100;
	
	@OneToMany(mappedBy = "client")
	@JsonIgnore
	private Set<Ticket> clientHistory;
	
	
	Client() {}
	
	Client(String name, String city, String age, String picURL, Ticket... clientHistory) {
		this.name = name;
		this.city = city;
		this.age = age;
		this.picURL = picURL;
		this.clientHistory = Stream.of(clientHistory).collect(Collectors.toSet());
		this.clientHistory.forEach(x -> x.setClient(this));
		
	}
	
	
	
}
