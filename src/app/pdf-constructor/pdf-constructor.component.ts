import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TemplatesService} from '../_services/templates.service'

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-constructor',
  templateUrl: './pdf-constructor.component.html',
  styleUrls: ['./pdf-constructor.component.css']
})
export class PdfConstructorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private tmservice: TemplatesService) { }

  preview: boolean = false

  idParam:any;

  items:any;

  ngOnInit(): void {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.tmservice.getS3TemplateById(this.idParam).subscribe(
      data => {
        this.items = data
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

  editarItem(id: number) {
    this.items[id]["content"] = (<HTMLInputElement>document.getElementById("content" + id)).value
    this.items[id]["text"] = (<HTMLInputElement>document.getElementById("content" + id)).value

    if ((<HTMLInputElement>document.getElementById("enlace" + id))) {
      this.items[id]["content"] = (<HTMLInputElement>document.getElementById("enlace" + id)).value
    }
  }

  generarPDF() {
    this.preview = true
  }

  exportHtmlToPDF(){
    let data = document.getElementById('pdf-container') as HTMLDivElement;
    let pdfname = (<HTMLInputElement>document.getElementById("inputNamePDF")).value

      html2canvas(data).then(canvas => {
          
          let docWidth = 208;
          let docHeight = canvas.height * docWidth / canvas.width;
          
          const contentDataURL = canvas.toDataURL('image/png')
          let doc = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
          
          doc.save(pdfname);
      });
  }

  previewPDF() {
    if (this.preview) {
      this.preview = false
    } else {
      this.preview = true
    }
  }
}
