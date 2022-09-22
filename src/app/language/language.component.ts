import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common'

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private location: Location) { }

  return() {
    this.location.back()
  }

  ngOnInit(): void {
  }

}
