import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { Users } from '../models/users.model';
import { UsersService } from '../_services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../_services/security.service';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
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
  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';
  constructor(private usersService: UsersService, private fb: FormBuilder, private router: Router, private security: SecurityService) {
    this.formSearch = this.fb.group({
      options: '',

    })
  }


  ngOnInit(): void {
    this.userById();
  }

  userById() {
    this.usersService.getUserByID(this.security.getId())
      .subscribe(
        data => {
          this.user = data;
          console.log("usuarios: " + JSON.stringify(data));

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );

  }


  update() {
    this.userInfo = {
      username: (<HTMLInputElement>document.getElementById("username")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value

    };

    if ((<HTMLInputElement>document.getElementById("username")).value != "" && (<HTMLInputElement>document.getElementById("email")).value != ""
      && (<HTMLInputElement>document.getElementById("password")).value != "") {

      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test((<HTMLInputElement>document.getElementById("email")).value)) {
        let c = "Are you sure you want to update ?"
        if (confirm(c) == true) {
          this.usersService.updateUser(this.security.getId(), this.userInfo)
            .subscribe(
              data => {
                console.log("usuario actualizado: " + JSON.stringify(data));
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

}
