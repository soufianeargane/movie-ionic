package com.example.demo.controllers;

import com.example.demo.entities.Movie;
import com.example.demo.services.movie.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping("")
    public List<Movie> getAllMovies() {
        return movieService.getAll();
    }

    @GetMapping("/{id}/{userId}")
    public Movie getMovieById(@PathVariable Integer id,@PathVariable Integer userId) {
        return movieService.getMovieById(id, userId);
    }



}
