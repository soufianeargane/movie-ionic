import { Component, OnInit } from '@angular/core';
import {
  IonItem,
  IonInput,
  IonList,
  IonLabel,
  IonButton,
  IonSpinner,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setUser } from '../../store/user/user.actions';
import { addIcons } from 'ionicons';
import { alertCircle } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonIcon,
    IonText,
    IonSpinner,
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList,
    ReactiveFormsModule,
    CommonModule,
  ],
  standalone: true,
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private store: Store
  ) {
    addIcons({
      alertCircle,
    });
  }

  ngOnInit() {
    console.log('Login component initialized');
    console.log(this.loginForm);
  }

  login() {
    console.log(this.loginForm);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.isSubmitted = false;
        console.log(res);
        this.store.dispatch(setUser({ value: res }));
        console.log('hhhhhhhhhh');
        this.router.navigate(['/movies']);
      },
      (err: any) => {
        this.isSubmitted = false;
        console.error(err);
      }
    );
  }
}
