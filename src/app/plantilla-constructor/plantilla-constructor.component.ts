import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TemplatesService } from '../_services/templates.service';
import { Image } from '../models/image.model';
import { ImageService } from '../_services/image.service';
import { AuthService } from '../_services/auth.service';
import { SecurityService } from '../_services/security.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Toast } from 'bootstrap';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
interface Item {
  type: string;
  content: string;
}

@Component({
  selector: 'app-plantilla-constructor',
  templateUrl: './plantilla-constructor.component.html',
  styleUrls: ['./plantilla-constructor.component.css']
})

export class PlantillaConstructorComponent implements OnInit {
[x: string]: any;

  @Input() titulo: string = 'Title Template';

  addItem: boolean = false;

  items = new Array();

  finished: boolean = false;
  modalError: boolean = false;

  index: number = 0;

  btnVisibleId: number = 0;

  editorView: boolean = false;

  imgs?: Image[];

  idImg: any;

  selectedFile: ImageSnippet | undefined;

  constructor(private templateService: TemplatesService, private serviceImg: ImageService, private sec: SecurityService, private sanitization: DomSanitizer,
    private modalService: NgbModal) { }

  @ViewChild("content",{static:true}) content:ElementRef | undefined;

  itemView() {
    if (this.addItem) {
      this.addItem = false;
    } else {
      this.addItem = true;
    }
  }

  ngOnInit(): void {
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

  imageSizer(id: any) {
    let width = (<HTMLInputElement>document.getElementById("range" + id)).value;
    this.items[id]["width"] = width;
  }

  chooseImg() {
    let src = (<HTMLInputElement>document.getElementById("input")).value;
    //let i=this.sanitization.bypassSecurityTrustStyle(src);
    this.items[this.idImg]["content"] = src;

  }


  passId(id: any) {
    this.idImg = id;
  }


  addTitle() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'h1',
      text: 'Titulo',
      content: ''
    }
    this.items.push(item)
    this.index++
    console.log(this.items)
  }

  addSubtitle() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'h2',
      text: 'Subtitulo',
      content: ''
    }
    this.items.push(item)
  }

  addSubtitle2() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'h3',
      text: 'Subtitulo 2',
      content: ''
    }
    this.items.push(item)
  }

  addText() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'h4',
      text: 'Texto',
      content: ''
    }
    this.items.push(item)
  }

  addImage() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'img',
      text: 'Imagen',
      content: './../assets/img/image-pl.png',
      width: '100'
    }
    this.items.push(item)
  }

  addEspacioLinea() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'linea',
      text: 'Espacio con Linea',
      content: ''
    }
    this.items.push(item)
  }

  addEspacioBlanco() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'espacio',
      text: 'Espacio en Blanco',
      content: ''
    }
    this.items.push(item)
  }

  addFirma() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'firma',
      text: 'Firma',
      content: ''
    }
    this.items.push(item)
  }

  addEnlace() {
    var item = {
      id: this.items.length,
      editvisible: false,
      type: 'enlace',
      text: 'Enlace',
      content: ''
    }
    this.items.push(item)
  }

  deleteItem(id: number) {
    this.items.splice(id, 1)
    this.reId()
  }

  reId() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i]["id"] = i;
    }
  }

  upItem(id: number) {
    if (id !== 0) {
      let tempItem = this.items[id - 1]
      this.items[id - 1] = this.items[id]
      this.items[id] = tempItem
      this.reId()
    }
  }

  downItem(id: number) {
    if (id !== this.items.length - 1) {
      let tempItem = this.items[id + 1]
      this.items[id + 1] = this.items[id]
      this.items[id] = tempItem
      this.reId()
    }
  }

  showMethods(id: number) {
    if (this.items[id]["editvisible"]) {
      this.items[id]["editvisible"] = false
    } else {
      if (this.items[this.btnVisibleId]) {
        this.items[this.btnVisibleId]["editvisible"] = false
        this.btnVisibleId = id;
        this.items[id]["editvisible"] = true
      } else {
        this.btnVisibleId = id;
        this.items[id]["editvisible"] = true
      }
    }
  }

  saveContent(id: any) {

    if ((<HTMLInputElement>document.getElementById("content" + id)).value != null) {
      this.items[id]["text"] = (<HTMLInputElement>document.getElementById("content" + id)).value
      this.items[id]["content"] = (<HTMLInputElement>document.getElementById("content" + id)).value
    }

    if (<HTMLInputElement>document.getElementById("enlace") != null) {

      this.items[id]["content"] = (<HTMLInputElement>document.getElementById("enlace")).value
    }
  }

  saveTemplate() {
    console.log("Uploading");
    //TODO CHANGE THIS TO A USERDEFINED TITLE
    this.titulo = (<HTMLInputElement>document.getElementById("inputNameTemplate")).value;

    this.modalService.open(this.content, { centered: true });

    let res = this.templateService.createTemplate(this.titulo, this.items)

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
    
    //console.log("File" + res);
  }


  goBackTemplates() {
    window.location.href = 'user-dashboard';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.serviceImg.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log("Uploaded correctly!")
          this.items[this.idImg]["content"] = res["src"]
          this.ngOnInit();
        },
        (err) => {
          console.log("Failed to upload!")
        })
    });

    reader.readAsDataURL(file);
  }

}
