package com.example.Authentication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Authentication.Models.Users;

public interface UserRepository extends JpaRepository<Users,Integer>{

}
