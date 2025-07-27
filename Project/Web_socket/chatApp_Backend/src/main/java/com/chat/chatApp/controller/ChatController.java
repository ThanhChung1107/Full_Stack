package com.chat.chatApp.controller;

import com.chat.chatApp.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class ChatController {

    @GetMapping("/sendMessage")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(ChatMessage mess){
        System.out.println("Received message " +mess);
        return mess;
    }

    @MessageMapping("/leave")
    @SendTo("/topic/messages")
    public ChatMessage leave(String userName){
        ChatMessage newMessage = new ChatMessage();
        newMessage.setContent(userName + " đã rời phòng chat");
        newMessage.setSender("system");
        newMessage.setType("LEAVE");
        return newMessage;
    }

    @MessageMapping("/join")
    @SendTo("/topic/messages")
    public ChatMessage join(String userName){
        ChatMessage newMessage = new ChatMessage();
        newMessage.setContent(userName + " đã tham gia phòng chat");
        newMessage.setSender("system");
        newMessage.setType("JOIN");
        return newMessage;
    }
}
