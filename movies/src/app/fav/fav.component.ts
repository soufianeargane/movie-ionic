import { Component, OnInit } from '@angular/core';
import { FavService } from '../services/fav.service';
import { Storage } from '@ionic/storage-angular';
import { map } from 'rxjs';
import { Movie } from '../model/movie';
import { TabsComponent } from '../tabs/tabs.component';
import {
  IonFooter,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, IonContent, TabsComponent, IonFooter],
})
export class FavComponent implements OnInit {
  userId!: number;

  movies: Movie[] = [];

  constructor(private favService: FavService, private storage: Storage) {}

  ngOnInit() {
    this.storage.create().then((storage) => {
      storage.get('user').then((user) => {
        this.userId = user.id;
        this.getFavs();
      });
    });
  }

  getFavs() {
    this.favService
      .getFavsOfUser(this.userId)
      .pipe(map((data) => data.map((fav) => fav.movie)))
      .subscribe((data) => {
        console.log(data);
        this.movies = data;
      });
  }
}
