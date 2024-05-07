import { Component, OnInit } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Store } from '@ngrx/store';
import { setUser } from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButton, IonToolbar, IonFooter, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private storage: Storage, private store: Store) {}

  ngOnInit() {
    this.storage.create().then((storage) => {
      storage.get('user').then((user) => {
        this.store.dispatch(setUser({ value: user }));
      });
    });
  }
}
