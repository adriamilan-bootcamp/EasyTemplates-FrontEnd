import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://easy-templates-backend.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user:any = null;

  login(email: string, password: string): Observable<any> {
    
    this.user = null;

    console.log("Login:\nEmail: " + email + "\nPassword: " + password + "\n");

    this.user = {
      "email": email,
      "password": password
    };

    console.log("Login:\nFinal login JSON Object (HTTP Req. Body): " + JSON.stringify(this.user) + "\n");

    return this.http.post(AUTH_API + 'login', JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json'}});
  }

  findRole(): Observable<any> {
    return this.http.get(AUTH_API + "roles");
  }


  /*register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      password
    }, httpOptions);
  }*/
}
