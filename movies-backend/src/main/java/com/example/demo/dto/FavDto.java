package com.example.demo.dto;

import com.example.demo.entities.Movie;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter

public class FavDto implements Serializable {

    private Movie movie;


}
