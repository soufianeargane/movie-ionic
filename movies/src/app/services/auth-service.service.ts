import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private storage: Storage) {}

  private API_URL = environment.API_URL;

  login(user: any) {
    return this.http.post(`${this.API_URL}/user/auth/login`, user).pipe(
      tap((res: any) => {
        // Save user object to storage
        this.storage.create().then((storage) => {
          storage.set('user', res);
        });
      })
    );
  }
}
