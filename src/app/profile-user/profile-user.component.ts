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
  user?:Users = {
    id: '',
    email: '',
    firma: '',
    password: '',
    roles: '',
    username: ''


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
    let userInfo = {
      username: (<HTMLInputElement>document.getElementById("username")).value,
      email: (<HTMLInputElement>document.getElementById("email")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value

    }
    this.usersService.updateUser(this.security.getId(), userInfo)
      .subscribe(
        data => {
          console.log("usuario actualizado: " + JSON.stringify(data));

        },
        error => {
          console.log("error update usuario: " + JSON.stringify(error));
          console.log("username: " + userInfo.username);
          console.log("email: " + userInfo.email);
          console.log("password: " + userInfo.password);


        }
      );

  }

}
