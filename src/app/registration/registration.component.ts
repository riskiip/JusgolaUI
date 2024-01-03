import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SignupInput} from "../model/loginDto";
import {LoginService} from "../login/login.service";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
    this.registrationForm = this.fb.group({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      mobile: new FormControl(null),
      role: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  registerUser() {
    let signupPayload: SignupInput = {
      firstname: this.registrationForm.get('firstname')?.value,
      lastname: this.registrationForm.get('lastname')?.value,
      email: this.registrationForm.get('email')?.value,
      mobile: this.registrationForm.get('mobile')?.value,
      role: this.registrationForm.get('role')?.value,
      password: this.registrationForm.get('password')?.value
    }

    this.loginService.signup(signupPayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          window.alert('Sucessfully registrated. Please Login');
          this.router.navigate(['/jusgola/login'])
        }
      }, (err) => {
        window.alert(err.error.message)
      })
  }
}
