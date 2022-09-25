import { Component, OnInit } from '@angular/core';
import { Pdf } from '../models/pdf.model';
import { PdfService } from '../_services/pdf.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecurityService } from '../_services/security.service';

@Component({
  selector: 'app-pdf-user',
  templateUrl: './pdf-user.component.html',
  styleUrls: ['./pdf-user.component.css']
})
export class PdfUserComponent implements OnInit {
  pdfs?: Pdf[];

  constructor(private pdfService: PdfService, private fb: FormBuilder, private router: Router, private secService: SecurityService) { }

  ngOnInit(): void {
    this.seePdfs(this.secService.getId())
  }

  seePdfs(id: any) {
    this.pdfService.getByUserId(id)
      .subscribe(
        data => {
          this.pdfs = data;
          console.log("Datos pdf: " + JSON.stringify(data))

        },
        error => {
          console.log("error listar pdfs: " + JSON.stringify(error));

        }
      );
  }

  viewPdf(id: any) {
    this.pdfService.viewPdf(id)
  }

  downloadPdf(id: any) {
    this.pdfService.downloadPdf(id)
  }

  deletePdf(id: any) {
    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.pdfService.delete(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar pdf->" + response);
            this.ngOnInit();
            alert("Pdf deleted!");


          }, error => {
            alert("Something went wrong could not delete the pdf.")
            console.log(error);

          }
        );
    } else {
      this.ngOnInit();
    }

  }

}
