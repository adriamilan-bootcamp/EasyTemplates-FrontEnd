import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';
const ID_KEY = 'auth-id';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private authService: AuthService, public router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
  }
  

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
    this.setRoles();
  }

  public saveId(id: any): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }

  public getId(): any {
    return window.sessionStorage.getItem(ID_KEY);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return user;
    }

    return {};
  }

    public setRoles() {
      
      this.authService.findRole().subscribe(
        data => {
          console.log(data["roles"]);
          window.sessionStorage.removeItem(ROLES_KEY);
          window.sessionStorage.setItem(ROLES_KEY, data["roles"]);
        },
        err => {
          console.log("Couldn't find role information")
        }
      )
    }

    public getRoles() {
      return window.sessionStorage.getItem(ROLES_KEY);
    }
}
