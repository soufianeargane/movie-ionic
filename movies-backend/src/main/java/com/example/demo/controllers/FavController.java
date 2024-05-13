package com.example.demo.controllers;

import com.example.demo.dto.FavDto;
import com.example.demo.entities.Fav;
import com.example.demo.services.fav.FavService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fav")
@Controller
@RequiredArgsConstructor
public class FavController {

    private final FavService favService;

     @PostMapping("")
    public Fav addFav(@RequestBody Fav fav) {
         return favService.addFav(fav);
     }

     @GetMapping("/{userId}")
    public List<FavDto> getFavByUserId(@PathVariable("userId") Integer userId) {
         return favService.getFavByUserId(userId);
     }
}
