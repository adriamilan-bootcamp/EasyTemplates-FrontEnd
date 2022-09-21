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
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("input")).value = '';
  }

  seeById() {
    (<HTMLInputElement>document.getElementById("tbTemplates")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbID")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tbTitle")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserId")).style.display = "none";

    this.temService.getTemplateByID((<HTMLInputElement>document.getElementById("input")).value)
      .subscribe(
        data => {
          this.template = data;
          console.log("templates: " + data);

        },
        error => {
          console.log("error listar template: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("input")).value = '';
  }

  seeByTitle() {
    (<HTMLInputElement>document.getElementById("tbTemplates")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbID")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbTitle")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tbUserId")).style.display = "none";

    this.temService.getTemplateByTitle((<HTMLInputElement>document.getElementById("input")).value)
      .subscribe(
        data => {
          this.templates = data;
          console.log("templates: " + data);
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("input")).value = '';

  }

  seeByUser() {
    (<HTMLInputElement>document.getElementById("tbTemplates")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbID")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbTitle")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tbUserId")).style.display = "table";

    this.temService.getTemplateByUserId((<HTMLInputElement>document.getElementById("input")).value)
      .subscribe(
        data => {
          this.templates = data;
          console.log("templates: " + data);
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("input")).value = '';
  }

  delete(id: any) {
    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.temService.deleteTemplate(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar template->" + response);
            window.location.reload();
            alert("Template deleted");

          }, error => {
            console.log(error);

          }
        );
    } else {
      window.location.reload();
    }
  }

}
