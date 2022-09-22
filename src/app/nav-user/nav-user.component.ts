import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { HomeUserComponent } from '../home-user/home-user.component';

import * as $ from 'jquery';


@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  constructor() { }

  item = "profile-tab";

  active = 1;

  addItem(newItem: string) {
    //this.item = newItem;
    console.log(newItem);
    switch (newItem) {
      case 'user':
        this.active = 2;
        break;

      case 'templates':
        this.active = 3;
        break;

      case 'pdfs':
        this.active = 4;
        break;

      case 'images':
        this.active = 5;
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
  }

}
