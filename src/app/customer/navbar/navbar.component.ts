import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../login/login.service";
import {take} from "rxjs";
import {LogoutInput} from "../../model/loginDto";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showLogout = false;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.showLogout = true;
    }
  }

  toLogin() {
    this.router.navigate(['/jusgola/login']);
  }

  logoutUser() {
    let logoutPayload: LogoutInput = {
      cookieToken: localStorage.getItem('refreshToken')
    }
    this.loginService.logout(logoutPayload)
      .subscribe(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        this.showLogout = false;
      });
  }
}
