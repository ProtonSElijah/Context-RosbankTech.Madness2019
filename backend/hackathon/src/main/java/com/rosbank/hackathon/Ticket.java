package com.rosbank.hackathon;

import lombok.Data;

import java.util.LinkedList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Data
@Entity
class Ticket {
	private @Id @GeneratedValue Long id;
	private String date;
	private Float emotionPercent;
	private String theme;
	
	@JsonIgnore
	private LinkedList<String> chat;
	
	@ManyToOne
	@JoinColumn(name = "client_id")
	@JsonIgnore
	private Client client;
	
	Ticket() {}

	Ticket(String date, String theme) {
		this.date = date;
		this.theme = theme;
	}
	
	
}
