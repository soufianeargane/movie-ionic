import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonFooter,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';
import { MovieServiceService } from '../../services/movie-service.service';
import { Movie } from '../../model/movie';
import { map } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { TabsComponent } from '../../tabs/tabs.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    TabsComponent,
  ],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private movieService: MovieServiceService,
    private storage: Storage
  ) {
    addIcons({
      chevronForwardOutline,
    });
  }

  isFetching = false;
  error = null;
  movies: Movie[] = [];

  navigateToMovie(id: number) {
    setTimeout(() => {
      this.router.navigate(['/movie', id]);
    }, 200);
  }

  getMovies() {
    this.isFetching = true;
    this.movieService
      .getMovies()
      .pipe(
        map((movies) => {
          return movies.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              image_path: movie.image_path,
            };
          });
        })
      )
      .subscribe(
        (movies) => {
          this.isFetching = false;
          this.movies = movies;
        },
        (error) => {
          console.log(error);
          this.isFetching = false;
          this.error = error.message;
        }
      );
  }

  ngOnInit() {
    this.getMovies();
  }
}
