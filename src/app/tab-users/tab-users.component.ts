import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { Users } from '../models/users.model';
import { UsersService } from '../_services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-users',
  templateUrl: './tab-users.component.html',
  styleUrls: ['./tab-users.component.css']
})
export class TabUsersComponent implements OnInit {


  users?: Users[];
  user?: Users = {
    id: '',
    email: '',
    firma: '',
    password: '',
    rol: '',
    username: ''


  };


  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';

  constructor(private usersService: UsersService, private fb: FormBuilder, private router: Router) {
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
          console.log("usuarios: " + data);

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
          console.log("usuarios: " + data);

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
          console.log("usuarios: " + data);

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
          console.log("usuarios: " + data);

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );

    (<HTMLInputElement>document.getElementById("inputUsers")).value = '';
  }

  delete(id: any) {
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
  }

}
