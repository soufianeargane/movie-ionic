package com.example.demo.services.user;

import com.example.demo.entities.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

//    get user by email
    User getUserByEmail(String email);

//    login user
    User login(User user);
}
