package com.example.Authentication.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Authentication.Models.Users;
import com.example.Authentication.Repository.UserRepository;

@Service
public class UserServices {

    private UserRepository userRepository;

    public List<Users> getUsers(){
        return userRepository.findAll();
    }

    public String addUser(Users user){
        userRepository.save(user);
        return "user added successfully";
    }
}
