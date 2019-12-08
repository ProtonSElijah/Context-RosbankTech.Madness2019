package com.rosbank.hackathon;

import java.util.Iterator;
import java.util.Set;

class AverageLoyaltyCalculator {
	static Float calculate(Set<Ticket> tickets) {
		Iterator<Ticket> iterator = tickets.iterator(); 
		int i = 0;
		Float sum = (float)0.0;
		while(iterator.hasNext()) {
			Ticket ticket = iterator.next();
			sum+=ticket.getToxicPercent();
			i++;
		}
		return sum/i;
	}
}
