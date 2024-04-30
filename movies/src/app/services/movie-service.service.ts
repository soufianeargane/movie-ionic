import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.API_URL;

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.API_URL);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.API_URL}/${id}`);
  }
}
