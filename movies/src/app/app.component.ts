import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButton, IonToolbar, IonFooter, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
