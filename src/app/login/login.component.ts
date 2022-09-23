import { Component, OnInit } from "@angular/core";

import { AuthService } from "../_services/auth.service";
import { SecurityService } from "../_services/security.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenStorageService: SecurityService,
    public router: Router
  ) {}

  isLoginFailed = false;
  isLoggedInView = false;
  errorMessage = "";

  roles: string | undefined;

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  usernameView?: string;

  form: any = {
    email: null,
    password: null,
  };

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      const token = this.tokenStorageService.getToken();
      this.usernameView = JSON.stringify(user).replace(/['"]+/g, ""); // faig un regex per treure-li les cometes
      this.roles = this.tokenStorageService
        .getRoles()
        ?.toString()
        .replace(/['"]+/g, "");
    }
  }

  onSubmit(): void {
    this.isLoginFailed = false;

    this.authService.login(this.form.email, this.form.password).subscribe(
      (data) => {
        this.isLoggedInView = true;
        this.usernameView = this.form.email;

        this.tokenStorageService.saveToken(data["token"]);
        this.tokenStorageService.saveUser(this.form.email);

        this.authService.findId().subscribe(
          (data) => {
            console.log("ID: " + data["id"]);
            this.tokenStorageService.saveId(data["id"]);

            setTimeout(() => {
              this.usernameView = this.form.email;

              this.isLoginFailed = false;
              this.isLoggedIn = true;

              if (
                this.tokenStorageService
                  .getRoles()
                  ?.toString()
                  .replace(/['"]+/g, "") == "ROLE_ADMIN"
              ) {
                this.router.navigate(["/admin-dashboard"]);
              } else {
                this.router.navigate(["/user-dashboard"]);
              }
            }, 3000);
          },
          (err) => {}
        );
      },
      (err) => {
        switch (err.status) {
          case 401: //login
            this.errorMessage = "Login failed, check credentials";
            this.isLoginFailed = true;
            break;

          default:
            console.log("Unhandled");
            break;
        }
      }
    );
  }
}
