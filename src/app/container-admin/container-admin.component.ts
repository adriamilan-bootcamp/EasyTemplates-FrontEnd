import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { Users } from '../models/users.model';
import { UsersService } from '../_services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';

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
  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default='select';

  constructor(private usersService: UsersService, private fb: FormBuilder) {
    this.formSearch = this.fb.group({
      options: '',
     
    })
  }

  ngOnInit(): void {
    this.seeAllUsers();
  
   
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

  onChange(f: any) {
    console.log(f.value);
    this.valuePlaceholder = f.value['options'];
  }

  userByName(){
    console.log("by name");
    
  }

  userByID(){
    console.log("by id");
    
  }

  userByEmail(){}

}
