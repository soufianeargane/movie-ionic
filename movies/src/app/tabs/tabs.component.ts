import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonIcon, IonToolbar, RouterModule],
  standalone: true,
})
export class TabsComponent {
  constructor() {
    addIcons({
      homeOutline,
      heartOutline,
    });
  }
}
