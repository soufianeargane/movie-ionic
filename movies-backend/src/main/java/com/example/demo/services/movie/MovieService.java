package com.example.demo.services.movie;

import com.example.demo.entities.Movie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MovieService {

    public List<Movie> getAll();

    public Movie getMovieById(Integer id, Integer userId);
}
