import { Component, OnInit } from '@angular/core';
import { FavService } from '../../services/fav.service';
import { Observable, map, filter } from 'rxjs';
import { Movie } from '../../model/movie';
import { TabsComponent } from '../../tabs/tabs.component';
import {
  IonFooter,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { User } from 'src/app/model/user';
import { selectUserState } from 'src/app/store/user/user.selector';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, IonContent, TabsComponent, IonFooter],
})
export class FavComponent implements OnInit {
  userId!: number;
  user$!: Observable<User>;
  movies: Movie[] = [];

  constructor(private favService: FavService, private store: Store) {}

  ngOnInit() {
    this.store
      .select(selectUserState)
      .pipe(
        switchMap((user) => {
          this.userId = user.id;
          return this.favService.getFavsOfUser(this.userId);
        }),
        map((data) => data.map((fav) => fav.movie))
      )
      .subscribe((data) => {
        this.movies = data;
      });
  }

  // ngOnInit() {
  //   // this.storage.create().then((storage) => {
  //   //   storage.get('user').then((user) => {
  //   //     this.userId = user.id;
  //   //     this.getFavs();
  //   //   });
  //   // });
  //   this.user$ = this.store.select(selectUserState).pipe(
  //     filter((user) => user.id !== 0) // Filter out initial state with userId 0
  //   );
  //   this.store.select(selectUserState).subscribe((user) => {
  //     console.log(11111111111111);
  //     this.userId = user.id;
  //     console.log(user);
  //     this.getFavs();
  //   });
  // }

  // getFavs() {
  //   this.favService
  //     .getFavsOfUser(this.userId)
  //     .pipe(map((data) => data.map((fav) => fav.movie)))
  //     .subscribe((data) => {
  //       this.movies = data;
  //     });
  // }
}
