import { Component, OnInit } from '@angular/core';
import { Template } from '../models/template.model';
import { TemplatesService } from '../_services/templates.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecurityService } from '../_services/security.service';

@Component({
  selector: 'app-template-user',
  templateUrl: './template-user.component.html',
  styleUrls: ['./template-user.component.css']
})
export class TemplateUserComponent implements OnInit {
  templ?: Template[];
  preview: boolean = false

  constructor(private templService: TemplatesService, private fb: FormBuilder, private router: Router, private secService: SecurityService) { }

  ngOnInit(): void {

    this.seeTemplates(this.secService.getId())
    
  }

  seeTemplates(id: any) {
    this.templService.getTemplateByUserId(id)
      .subscribe(
        data => {
          this.templ = data;
          console.log("Datos templates: " + JSON.stringify(data))

        },
        error => {
          console.log("error listar templates: " + JSON.stringify(error));

        }
      );
  }

  deleteTemplate(id: any) {
    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.templService.deleteTemplate(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar template->" + response);
            this.ngOnInit();
            alert("Template deleted!");


          }, error => {
            alert("Something went wrong could not delete the template.")
            console.log(error);

          }
        );
    } else {
      this.ngOnInit();
    }

  }

  previewPDF() {
    if (this.preview) {
      this.preview = false
    } else {
      this.preview = true
    }
  }

}
