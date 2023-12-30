import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginInput, LoginOutput} from "../model/loginDto";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
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

  logout(): Observable<any> {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    return this.http
      .get(`${environment.url}/api/user/logout`, {headers})
      .pipe(map((response: any) => {
        return response;
      }))
  }
}
