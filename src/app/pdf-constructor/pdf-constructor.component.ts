import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplatesService } from '../_services/templates.service'
import { PdfService } from '../_services/pdf.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { ImageService } from '../_services/image.service';
import { Image } from '../models/image.model';
import { SecurityService } from '../_services/security.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-pdf-constructor',
  templateUrl: './pdf-constructor.component.html',
  styleUrls: ['./pdf-constructor.component.css']
})
export class PdfConstructorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private tmservice: TemplatesService, private pdfService: PdfService, private serviceImg: ImageService, private sec: SecurityService,
    private modalService: NgbModal) { }

  preview: boolean = false

  idParam: any;

  @ViewChild("content",{static:true}) content:ElementRef | undefined;
  
  finished: boolean = false;
  modalError: boolean = false;
  
  items: any;
  imgs?: Image[];
  idImg: any;
  selectedFile: ImageSnippet | undefined;
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

  exportHtmlToPDF() {
    let data = document.getElementById('pdf-container') as HTMLDivElement;
    
    let pdfname = (<HTMLInputElement>document.getElementById("inputNamePDF")).value

    html2canvas(data, {
      logging: true, 
      useCORS: true,
      allowTaint : true
    }).then(canvas => {

      let docWidth = 208;
      let docHeight = canvas.height * docWidth / canvas.width;
      
      const contentDataURL = canvas.toDataURL('image/png')
      let doc = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

      let res = this.pdfService.addPdf(pdfname, doc.output('blob'));

      this.modalService.open(this.content, { centered: true });

      this.finished = false;

      res.subscribe(
      data => {
        this.finished = true;

        setTimeout(() => {
          this.modalService.dismissAll(this.content);
        }, 2000);

        setTimeout(() => {
          jQuery('body').removeAttr('style');
          
        }, 2500);
      }, error => {
        this.finished = true;
        this.modalError = true;

        setTimeout(() => {
          this.modalService.dismissAll(this.content);
          this.modalError = false;
        }, 2000);

        setTimeout(() => {
          jQuery('body').removeAttr('style');
          
        }, 2500);
      }
    )
      
    });
  }

  previewPDF() {
    if (this.preview) {
      this.preview = false
    } else {
      this.preview = true
    }
  }

  goBackTemplates() {
    window.location.href = 'user-dashboard';
  }


  myImages() {
    this.serviceImg.getByUserId(this.sec.getId())
      .subscribe(
        data => {
          this.imgs = data;
          console.log("mis imagenes: " + data);

        },
        error => {
          console.log(error);

        }
      );
  }

  setImage(src: any) {
    this.items[this.idImg]["content"] = src;

  }

  chooseImg() {
    let src = (<HTMLInputElement>document.getElementById("input")).value;
    //let i=this.sanitization.bypassSecurityTrustStyle(src);
    this.items[this.idImg]["content"] = src;

  }



  passId(id: any) {
    this.idImg = id;
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.serviceImg.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log("Uploaded correctly!")
          this.ngOnInit();
        },
        (err) => {
          console.log("Failed to upload!")
        })
    });

    reader.readAsDataURL(file);
  }

  imageSizer(id: any) {
    let width = (<HTMLInputElement>document.getElementById("range" + id)).value;
    this.items[id]["width"] = width;
  }
}
