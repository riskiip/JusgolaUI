import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {LoginInput} from "../model/loginDto";
import {take} from "rxjs";

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
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  ngOnInit(): void {
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
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('userId', res._id);
          if (res.role === 'customer') {
            this.router.navigate(['jusgola/customer']);
          } else if (res.role === 'merchant') {
            this.router.navigate(['jusgola/merchant']);
          } else {
            this.router.navigate(['jusgola/ministry']);
          }
          window.alert(`Welcome ${res.firstname} ${res.lastname}`);
        }
      }, (err) => {
        window.alert(err.error.message);
      })
  }
}
