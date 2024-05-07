import { Component, OnInit } from '@angular/core';
import {
  IonItem,
  IonInput,
  IonList,
  IonLabel,
  IonButton,
  IonSpinner,
} from '@ionic/angular/standalone';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonSpinner,
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList,
    ReactiveFormsModule,
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
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Login component initialized');
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.isSubmitted = false;
        console.log(res);
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
