import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Pdf } from '../models/pdf.model';
import { PdfService } from '../_services/pdf.service';

@Component({
  selector: 'app-tab-pdf',
  templateUrl: './tab-pdf.component.html',
  styleUrls: ['./tab-pdf.component.css']
})
export class TabPdfComponent implements OnInit {
  pdfs?: Pdf[];
  pdf?: Pdf = {
    id: '',
    fechaCreacion: '',
    src: '',
    titulo: ''


  };


  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';

  constructor(private pService: PdfService, private fb: FormBuilder, private router: Router) { 
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
    (<HTMLInputElement>document.getElementById("tb-pdfs")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tb-id")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-title")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-user")).style.display = "none";
    this.pService.getAll()
      .subscribe(
        data => {
          this.pdfs = data;
          console.log("templates: " + data);
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputP")).value = '';
  }

  seeById() {
    (<HTMLInputElement>document.getElementById("tb-pdfs")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-id")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tb-title")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-user")).style.display = "none";

    this.pService.getByID((<HTMLInputElement>document.getElementById("inputP")).value)
      .subscribe(
        data => {
          this.pdf = data;
          console.log("templates: " + data);

        },
        error => {
          console.log("error listar template: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputP")).value = '';
  }

  seeByTitle() {
    (<HTMLInputElement>document.getElementById("tb-pdfs")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-id")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-title")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tb-user")).style.display = "none";

    this.pService.getByTitle((<HTMLInputElement>document.getElementById("inputP")).value)
      .subscribe(
        data => {
          this.pdfs = data;
          console.log("templates: " + data);
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputP")).value = '';

  }

  seeByUser() {
    (<HTMLInputElement>document.getElementById("tb-pdfs")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-id")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-title")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tb-user")).style.display = "table";

    this.pService.getByUserId((<HTMLInputElement>document.getElementById("inputP")).value)
      .subscribe(
        data => {
          this.pdfs = data;
          console.log("templates: " + data);
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputP")).value = '';
  }

  delete(id: any) {
    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.pService.delete(id)
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
