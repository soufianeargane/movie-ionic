package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@RequiredArgsConstructor
@AllArgsConstructor

public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Integer id;

        private String email;
        private String password;
}
