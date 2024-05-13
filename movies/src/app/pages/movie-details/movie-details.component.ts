import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  IonHeader,
  IonIcon,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonFooter,
} from '@ionic/angular/standalone';
import { Movie } from '../../model/movie';
import { MovieServiceService } from '../../services/movie-service.service';
import { TabsComponent } from '../../tabs/tabs.component';
import { FavService } from '../../services/fav.service';

import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUserState } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  imports: [
    IonFooter,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonIcon,
    IonHeader,
    TabsComponent,
  ],
  standalone: true,
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService,
    private favService: FavService,
    private store: Store
  ) {}

  movieId!: number;
  user_id!: number;
  movie: Movie = {
    id: 0,
    title: '',
    season: '',
    image_path: '',
    tags: [],
  };

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   console.log(`Movie details for movie with id: ${params['id']}`);
    //   this.movieId = +params['id'];

    //   this.store
    //     .select(selectUserState)
    //     .pipe(
    //       switchMap((user) => {
    //         this.user_id = user.id;
    //         return this.movieService.getMovieById(this.movieId, this.user_id);
    //       })
    //     )
    //     .subscribe((movie) => {
    //       this.movie = movie;
    //     });
    // });
    this.showMovie();
  }

  addToFav(movieId: number) {
    console.log('Adding to fav' + movieId);
    this.favService.addFavorite(this.user_id, movieId).subscribe((data) => {
      console.log(data);
      this.showMovie();
    });
  }

  showMovie() {
    this.route.params.subscribe((params: Params) => {
      console.log(`Movie details for movie with id: ${params['id']}`);
      this.movieId = +params['id'];

      this.store
        .select(selectUserState)
        .pipe(
          switchMap((user) => {
            this.user_id = user.id;
            return this.movieService.getMovieById(this.movieId, this.user_id);
          })
        )
        .subscribe((movie) => {
          this.movie = movie;
        });
    });
  }
}
