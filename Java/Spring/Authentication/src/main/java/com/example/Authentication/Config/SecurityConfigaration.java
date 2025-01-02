package com.example.Authentication.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfigaration {
    @Bean
    public SecurityFilterChain SecurityFilterChain(HttpSecurity http) throws Exception{
        return http.build();
    }

}
