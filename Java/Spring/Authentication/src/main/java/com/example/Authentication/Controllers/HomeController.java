package com.example.Authentication.Controllers;

import org.springframework.web.bind.annotation.*;

@RestController
class HomeController{
    
    @GetMapping("/")
    public String index(){
        return "This is my home page";
    }
}