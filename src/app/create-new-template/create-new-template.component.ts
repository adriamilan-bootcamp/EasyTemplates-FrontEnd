import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NewTemplateComponent } from '../new-template/new-template.component';

@Component({
  selector: 'app-create-new-template',
  templateUrl: './create-new-template.component.html',
  styleUrls: ['./create-new-template.component.css']
})
export class CreateNewTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
