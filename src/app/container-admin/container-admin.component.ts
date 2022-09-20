import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-container-admin',
  templateUrl: './container-admin.component.html',
  styleUrls: ['./container-admin.component.css']
})
export class ContainerAdminComponent implements OnInit {

  users?: Users[];
  id?: any;
  email?: any;
  password?: any;
  username?: any;
  firma?: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  
  }

  seeAllUsers(): void {
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

}
