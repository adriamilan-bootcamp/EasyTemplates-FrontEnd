import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {

  }

}
