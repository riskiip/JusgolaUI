import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {LoginInput} from "../model/loginDto";
import {take} from "rxjs";
import {CookiesService} from "../utilities/cookies.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  refreshToken!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private cookieService: CookiesService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  redirectPage() {
    alert('Login to Jusgola is succesful.');
    this.router.navigate(['/jusgola/customer']);
  }

  loginUser() {
    let loginPayload: LoginInput = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
    this.loginService.login(loginPayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res._id);
          this.refreshToken = this.cookieService.getCookie('refreshToken');
          this.router.navigate(['jusgola']);
        }
      })
  }
}
