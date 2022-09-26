import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-top-contact',
  templateUrl: './top-contact.component.html',
  styleUrls: ['./top-contact.component.css']
})
export class TopContactComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
 goBack(){
  this.location.back()
 }
}
