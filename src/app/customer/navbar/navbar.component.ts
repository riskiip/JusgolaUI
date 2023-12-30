import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../login/login.service";
import {take} from "rxjs";

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
    if (localStorage.getItem('token') !== undefined) {
      this.showLogout = true;
    }
  }

  toLogin() {
    this.router.navigate(['/jusgola/login']);
  }

  logoutUser() {
    this.loginService.logout()
      .subscribe((response) => {
        console.log(response);
        if (response) {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          this.showLogout = false;
        }
      });
  }
}
