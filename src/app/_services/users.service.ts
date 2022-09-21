import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';


const url = "https://easy-templates-backend.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(url + "api/usuarios");
  }

  getUserByID(id: any): Observable<Users> {
    return this.http.get<Users>(url + "api/usuarios/" + id);
  }

  getUserByName(name: any): Observable<Users[]> {
    return this.http.get<Users[]>(url + "api/usuarios/name/" + name);
  }

  getUserByEmail(email: any): Observable<Users> {
    return this.http.get<Users>(url + "api/usuarios/email/" + email);
  }

  createUser() { }

  updateUser() { }

  deleteUser(id: any): Observable<Users> {
    return this.http.delete<Users>(url + "api/usuarios/" + id);

  }

}
