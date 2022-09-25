import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { Users } from '../models/users.model';
import { UsersService } from '../_services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from "../_services/auth.service";
import { SecurityService } from "../_services/security.service";


@Component({
  selector: 'app-tab-users',
  templateUrl: './tab-users.component.html',
  styleUrls: ['./tab-users.component.css']
})
export class TabUsersComponent implements OnInit {

seeid:any;
seeName:any;
seeEamil:any;
seePassword:any;
seeRole:any;
  users?: Users[];
  user?: Users = {
    id: '',
    email: '',
    firma: '',
    password: '',
    roles: '',
    username: ''


  };
  userInfo: any = {
    name: null,
    email: null,
    password: null,
  };

  isRegisterFailed = false;
  isRegisteredInView = false;
  errorMessage = "";

  usernameView?: string;

  form: any = {
    email: null,
    name: null,
    password: null,
  };


  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';

  constructor(private usersService: UsersService, private fb: FormBuilder, private router: Router, private authService: AuthService,) {
    this.formSearch = this.fb.group({
      options: '',

    })
  }

  ngOnInit(): void {
    this.seeAllUsers();

  }

  seeAllUsers(): void {
    (<HTMLInputElement>document.getElementById("tbUsers")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tbUserByID")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByName")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByEmail")).style.display = "none";
    this.usersService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log("usuarios: " + JSON.stringify(data));

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );
  }

  onChange(f: any) {
    console.log(f.value);
    this.valuePlaceholder = f.value['options'];
  }

  userById() {
    //eliminamos las tablas que no queremos que se vean
    (<HTMLInputElement>document.getElementById("tbUserByID")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tbUsers")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByName")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByEmail")).style.display = "none";
    console.log("by id");
    this.usersService.getUserByID((<HTMLInputElement>document.getElementById("inputUsers")).value)
      .subscribe(
        data => {
          this.user = data;
          console.log("usuarios: " + JSON.stringify(data));

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputUsers")).value = '';
  }

  userByName() {
    (<HTMLInputElement>document.getElementById("tbUsers")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByID")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByName")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tbUserByEmail")).style.display = "none";
    console.log("by name");
    this.usersService.getUserByName((<HTMLInputElement>document.getElementById("inputUsers")).value)
      .subscribe(
        data => {
          this.users = data;
          console.log("usuarios: " + JSON.stringify(data));

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputUsers")).value = '';
  }

  userByEmail() {
    (<HTMLInputElement>document.getElementById("tbUsers")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByID")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByName")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserByEmail")).style.display = "table";
    console.log("by id");
    this.usersService.getUserByEmail((<HTMLInputElement>document.getElementById("inputUsers")).value)
      .subscribe(
        data => {
          this.user = data;
          console.log("usuarios: " + JSON.stringify(data));

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );

    (<HTMLInputElement>document.getElementById("inputUsers")).value = '';
  }

  delete(id: any) {


    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.usersService.deleteUser(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar user->" + response);
            window.location.reload();
            alert("User deleted");

          }, error => {
            console.log(error);

          }
        );
    } else {
      window.location.reload();
    }

  }
  seeUser(id:any){

    this.usersService.getUserByID(id)
    .subscribe(
      data => {
        this.seeid=data.id;
        this.seeName=data.username;
        this.seeEamil=data.email;
        this.seePassword=data.password
        this.seeRole=data.roles;
        console.log("usuario: " + JSON.stringify(data));

      },
      error => {
        console.log("error listar usuario: " + error);

      }
    );
  }

  update1(id: any) {
    this.userInfo = {
      username: (<HTMLInputElement>document.getElementById("username1")).value,
      email: (<HTMLInputElement>document.getElementById("email1")).value,
      password: (<HTMLInputElement>document.getElementById("password1")).value

    };

    if ((<HTMLInputElement>document.getElementById("username1")).value != "" && (<HTMLInputElement>document.getElementById("email1")).value != ""
      && (<HTMLInputElement>document.getElementById("password1")).value != "") {

      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test((<HTMLInputElement>document.getElementById("email1")).value)) {
        let c = "Are you sure you want to update ?"
        if (confirm(c) == true) {
          this.usersService.updateUser(id, this.userInfo)
            .subscribe(
              data => {
                console.log("usuario actualizado: " + JSON.stringify(data));
                this.ngOnInit();
                alert("Your data has been updated! :)");

              },
              error => {
                console.log("error update usuario: " + JSON.stringify(error));
                alert("Something went wrong, the data could not be updated :(");
              }
            );
        } else {
          this.ngOnInit();
        }
      } else {
        alert("The email format is incorrect.");
      }
    } else {
      alert("Make sure all fields are filled.");
    }
  }

  update2(id: any) {
    this.userInfo = {
      username: (<HTMLInputElement>document.getElementById("username2")).value,
      email: (<HTMLInputElement>document.getElementById("email2")).value,
      password: (<HTMLInputElement>document.getElementById("password2")).value

    };

    if ((<HTMLInputElement>document.getElementById("username2")).value != "" && (<HTMLInputElement>document.getElementById("email2")).value != ""
      && (<HTMLInputElement>document.getElementById("password2")).value != "") {

      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test((<HTMLInputElement>document.getElementById("email2")).value)) {
        let c = "Are you sure you want to update ?"
        if (confirm(c) == true) {
          this.usersService.updateUser(id, this.userInfo)
            .subscribe(
              data => {
                console.log("usuario actualizado: " + JSON.stringify(data));
                this.ngOnInit();
                alert("Your data has been updated! :)");

              },
              error => {
                console.log("error update usuario: " + JSON.stringify(error));
                alert("Something went wrong, the data could not be updated :(");
              }
            );
        } else {
          this.ngOnInit();
        }
      } else {
        alert("The email format is incorrect.");
      }
    } else {
      alert("Make sure all fields are filled.");
    }
  }
  update3(id: any) {
    this.userInfo = {
      username: (<HTMLInputElement>document.getElementById("username3")).value,
      email: (<HTMLInputElement>document.getElementById("email3")).value,
      password: (<HTMLInputElement>document.getElementById("password3")).value

    };

    if ((<HTMLInputElement>document.getElementById("username3")).value != "" && (<HTMLInputElement>document.getElementById("email3")).value != ""
      && (<HTMLInputElement>document.getElementById("password3")).value != "") {

      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test((<HTMLInputElement>document.getElementById("email3")).value)) {
        let c = "Are you sure you want to update ?"
        if (confirm(c) == true) {
          this.usersService.updateUser(id, this.userInfo)
            .subscribe(
              data => {
                console.log("usuario actualizado: " + JSON.stringify(data));
                this.ngOnInit();
                alert("Your data has been updated! :)");

              },
              error => {
                console.log("error update usuario: " + JSON.stringify(error));
                alert("Something went wrong, the data could not be updated :(");
              }
            );
        } else {
          this.ngOnInit();
        }
      } else {
        alert("The email format is incorrect.");
      }
    } else {
      alert("Make sure all fields are filled.");
    }
  }
  update4(id: any) {
    this.userInfo = {
      username: (<HTMLInputElement>document.getElementById("username4")).value,
      email: (<HTMLInputElement>document.getElementById("email4")).value,
      password: (<HTMLInputElement>document.getElementById("password4")).value

    };

    if ((<HTMLInputElement>document.getElementById("username4")).value != "" && (<HTMLInputElement>document.getElementById("email4")).value != ""
      && (<HTMLInputElement>document.getElementById("password4")).value != "") {

      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test((<HTMLInputElement>document.getElementById("email4")).value)) {
        let c = "Are you sure you want to update ?"
        if (confirm(c) == true) {
          this.usersService.updateUser(id, this.userInfo)
            .subscribe(
              data => {
                console.log("usuario actualizado: " + JSON.stringify(data));
                this.ngOnInit();
                alert("Your data has been updated! :)");

              },
              error => {
                console.log("error update usuario: " + JSON.stringify(error));
                alert("Something went wrong, the data could not be updated :(");
              }
            );
        } else {
          this.ngOnInit();
        }
      } else {
        alert("The email format is incorrect.");
      }
    } else {
      alert("Make sure all fields are filled.");
    }
  }



  addUser(): void {
    this.isRegisterFailed = false;
    this.form.email = (<HTMLInputElement>document.getElementById("emailAddUser")).value;
    console.log("email del form" + (<HTMLInputElement>document.getElementById("emailAddUser")).value);

    this.form.name = (<HTMLInputElement>document.getElementById("nameAddUser")).value;
    this.form.password = (<HTMLInputElement>document.getElementById("passwordAddUser")).value;
    if ((<HTMLInputElement>document.getElementById("passwordAddUser")).value === (<HTMLInputElement>document.getElementById("repeatPasswordAddUser")).value) {

      this.authService
        .register(this.form.email, this.form.name, this.form.password)
        .subscribe(
          data => {

            this.isRegisteredInView = true;
            this.isRegisterFailed = false;;
           alert("The user has been added successfully");
           this.ngOnInit();
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
            alert("Something went wrong, the user could not be added.");
          }
        );
    }
    else {
      alert("Please make sure your passwords match!");
    }


  }

}
