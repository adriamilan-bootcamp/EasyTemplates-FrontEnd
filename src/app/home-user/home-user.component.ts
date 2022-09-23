import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

  changeTab(value: string) {
    this.newItemEvent.emit(value);
  }
  
  ngOnInit(): void {
  }

}
