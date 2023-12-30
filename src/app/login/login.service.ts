import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginInput, LoginOutput, LogoutInput, SignupInput} from "../model/loginDto";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  signup(payload: SignupInput): Observable<any> {
    return this.http
      .post<any>(
        `${environment.url}/api/user/register`,
        payload)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }

  login(payload: LoginInput): Observable<any> {
    return this.http
      .post<any>(
        `${environment.url}/api/user/login`,
        payload)
      .pipe(
        map((response: any) => {
          return response
        })
      )
  }

  logout(payload: LogoutInput): Observable<any> {
    return this.http
      .post(`${environment.url}/api/user/logout`, payload)
      .pipe(map((response: any) => {
        return response;
      }))
  }
}
