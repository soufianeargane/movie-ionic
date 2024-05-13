package com.example.demo.services.user;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow();
    }

    public User login(User user) {
        User loggedInUser = userRepository.findByEmail(user.getEmail()).orElseThrow();
        if (loggedInUser.getPassword().equals(user.getPassword())) {
            return loggedInUser;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
