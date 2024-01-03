import { Component, OnInit } from '@angular/core';
import {LogoutInput} from "../../model/loginDto";
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    let logoutPayload: LogoutInput = {
      cookieToken: localStorage.getItem('refreshToken')
    }
    this.loginService.logout(logoutPayload)
      .subscribe(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        this.router.navigate(['/jusgola']);
      }, (err) => {
        window.alert(err.error.message);
      });
  }

}
