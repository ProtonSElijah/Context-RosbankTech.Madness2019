package com.rosbank.hackathon;

import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;

//Chat simulator
@CrossOrigin
@RestController
class ChatController {
	
	@Autowired
	RabbitTemplate template;
	
	String[] chatResponse = {"Здравствуйте", 
			"Дебильный у вас чат",
			"Идите к черту",
			"Я не могу отправить деньги на карту в другой банк, что делать?",
			"ДЕРЬМО СОБАЧЬЕ, НИЧЕГО НЕ РАБОТАЕТ",
			"Надоели блин",
			"Спасибо"};
	
	@GetMapping("/chatResponse")
	@ResponseBody
	ChatResponse getResponse() {
		Random random = new Random();
		ChatResponse response = new ChatResponse();
		response.setEntry(chatResponse[random.nextInt(chatResponse.length)]);
		byte[] emo = (byte[]) template.convertSendAndReceive("user-messages", response.getEntry());
		response.setEmotion(Float.parseFloat(new String(emo)));
		return response;
	}
	
}
