import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
  {
    path: 'fav',
    loadComponent: () =>
      import('./pages/fav/fav.component').then((m) => m.FavComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
