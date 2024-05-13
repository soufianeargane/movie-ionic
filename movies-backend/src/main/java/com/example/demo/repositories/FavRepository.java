package com.example.demo.repositories;

import com.example.demo.entities.Fav;
import com.example.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavRepository extends JpaRepository<Fav, Integer> {

    @Query("SELECT f FROM Fav f WHERE f.user = :code")
   List<Fav> findByUser_id(@Param("code") Integer userId);

    List<Fav> findByUser(User user);

    @Query("SELECT CASE WHEN COUNT(f) > 0 THEN true ELSE false END FROM Fav f WHERE f.user.id = :userId AND f.movie.id = :movieId")
    boolean findByUserIdAndMovieId(Integer userId, Integer movieId);

}
