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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  imports: [
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonIcon,
    IonHeader,
  ],
  standalone: true,
})
export class MovieDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  movieId!: number;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(`Movie details for movie with id: ${params['id']}`);
      this.movieId = +params['id'];
    });
  }
}
