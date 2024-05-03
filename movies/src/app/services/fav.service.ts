import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.API_URL;

  getFavsOfUser(userId: number): Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}/fav/${userId}`);
  }

  addFavorite(userId: number, movieId: number): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/fav`, {
      user: {
        id: userId,
      },
      movie: {
        id: movieId,
      },
    });
  }
}
