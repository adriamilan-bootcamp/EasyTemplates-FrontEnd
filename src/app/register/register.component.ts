import { Component, OnInit } from "@angular/core";

import { AuthService } from "../_services/auth.service";
import { SecurityService } from "../_services/security.service";

import { Router } from "@angular/router";

import {
  AbstractControl,
  ValidatorFn,
  FormControl,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  isRegisterFailed = false;
  isRegisteredInView = false;
  errorMessage = "";

  usernameView?: string;

  form: any = {
    email: null,
    name: null,
    password: null,
  };

  constructor(
    private authService: AuthService,
    private tokenStorageService: SecurityService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isRegisterFailed = false;

    console.log("Password: " + (<HTMLInputElement>document.getElementById("password")).value + "\nConfirm: " + (<HTMLInputElement>document.getElementById("repeatPassword")));

    if ((<HTMLInputElement>document.getElementById("password")).value === (<HTMLInputElement>document.getElementById("repeatPassword")).value) {
      
      this.authService
      .register(this.form.email, this.form.name, this.form.password)
      .subscribe(
        data => {

          this.isRegisteredInView = true;
          this.usernameView = this.form.email;

          setTimeout(() => {
            this.usernameView = this.form.email;

            this.isRegisterFailed = false;;

            this.router.navigate(["/user-dashboard"]);
          }, 3000);
        },
        err => {
          switch (err.status) {
            case 400:      //register
              this.errorMessage = "Registration failed, is email already registered?";
               this.isRegisterFailed = true;
              break;
            
              default:
                console.log("Unhandled");
                break;
          }
        }
      );
    }
    else {
      alert("Please make sure your passwords match!");
    }

    
  }
}
