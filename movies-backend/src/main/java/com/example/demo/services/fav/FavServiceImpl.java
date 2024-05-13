package com.example.demo.services.fav;

import com.example.demo.dto.FavDto;
import com.example.demo.entities.Fav;
import com.example.demo.entities.User;
import com.example.demo.repositories.FavRepository;
import com.example.demo.repositories.MovieRepository;
import com.example.demo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class FavServiceImpl implements FavService{

    private final FavRepository favRepository;
    private final UserRepository userRepository;
    private final MovieRepository movieRepository;
    private  final ModelMapper modelMapper;

    @Override
    public Fav addFav(Fav fav) {
    return favRepository.save(fav);
    }

    @Override
    public List<FavDto> getFavByUserId(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow();
           return favRepository.findByUser(user).stream().map(fav -> {

                FavDto favDto = modelMapper.map(fav, FavDto.class);
                favDto.setMovie(fav.getMovie());
                return favDto;
           }).toList();


    }
}
