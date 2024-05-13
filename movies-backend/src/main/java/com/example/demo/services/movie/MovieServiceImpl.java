package com.example.demo.services.movie;

import com.example.demo.entities.Fav;
import com.example.demo.entities.Movie;
import com.example.demo.repositories.FavRepository;
import com.example.demo.repositories.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class MovieServiceImpl implements MovieService{
    private final MovieRepository movieRepository;
    private final FavRepository favRepository;
    @Override
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }

    @Override
    public Movie getMovieById(Integer id, Integer userId) {

        Movie movie = movieRepository.findById(id).orElse(null);
        if (movie != null) {
            boolean isFav = favMovieByUserId(userId, id);
            movie.setTheMovieFav(isFav);
            return movie;
        }
        return null;
    }

    public boolean favMovieByUserId(Integer userId, Integer movieId) {
        boolean fav = favRepository.findByUserIdAndMovieId(userId, movieId);
        return fav;
    }


}
