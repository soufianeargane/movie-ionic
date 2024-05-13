package com.example.demo.services.fav;

import com.example.demo.dto.FavDto;
import com.example.demo.entities.Fav;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FavService {

    Fav addFav(Fav fav);

    List<FavDto> getFavByUserId(Integer userId);
}
