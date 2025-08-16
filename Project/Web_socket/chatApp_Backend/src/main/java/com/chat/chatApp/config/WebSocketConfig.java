package com.chat.chatApp.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configurable
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config){
        //Kích hoạt Simple Broker do Spring cung cấp để xử lý các message gửi từ server đến client.
        config.enableSimpleBroker("/topic");
        //Định nghĩa prefix cho các message từ client gửi lên server.
        config.setApplicationDestinationPrefixes("/app");
    }

    //Đăng ký STOMP endpoint
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry){
        registry.addEndpoint("/chat-websocket").setAllowedOrigins("http://localhost:3306").withSockJS();
    }
}
