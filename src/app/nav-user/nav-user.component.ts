import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { HomeUserComponent } from '../home-user/home-user.component';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  constructor() { }

  item = "home";

  addItem(newItem: string) {
    //this.item = newItem;
    console.log(newItem);
    switch (newItem) {
      case 'user':
        ($('#myTab a[href="#profile-tab"]')as any).tab('show')
        break;

      case 'templates':
        ($('#myTab a[href="#templates-tab"]')as any).tab('show')
        break;

      case 'pdfs':
        ($('#myTab a[href="#pdfs-tab"]')as any).tab('show')
        break;

      case 'imgs-tab':
        ($('#myTab a[href="#profile"]')as any).tab('show')
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
  }

}
