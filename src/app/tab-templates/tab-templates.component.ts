import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Template } from '../models/template.model';
import { TemplatesService } from '../_services/templates.service';

@Component({
  selector: 'app-tab-templates',
  templateUrl: './tab-templates.component.html',
  styleUrls: ['./tab-templates.component.css']
})
export class TabTemplatesComponent implements OnInit {
  templates?: Template[];
  template?: Template = {
    id: '',
    date: '',
    src: '',
    title: ''


  };

  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';
  constructor(private temService: TemplatesService, private fb: FormBuilder, private router: Router) {
    this.formSearch = this.fb.group({
      options: '',

    })
  }

  ngOnInit(): void {
    this.seeAll();
  }
  onChange(f: any) {
    console.log(f.value);
    this.valuePlaceholder = f.value['options'];
  }
  seeAll(): void {
    (<HTMLInputElement>document.getElementById("tbTemplates")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tbID")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbTitle")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserId")).style.display = "none";
    this.temService.getAllTemplates()
      .subscribe(
        data => {
          this.templates = data;
          console.log("templates: " + data);
          console.log(data[0].title);


        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
  }
}
