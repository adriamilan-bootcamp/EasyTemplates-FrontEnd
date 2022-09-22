import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from '../_services/templates.service'

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

  @Input() titulo: string = '';

  addItem: boolean = false;

  items = new Array();

  index: number = 0;

  btnVisibleId: number = 0;

  editorView: boolean = false;

  constructor(private templateService: TemplatesService) { }

  itemView() {
    if(this.addItem) {
      this.addItem = false;
    } else {
      this.addItem = true;
    }
  }

  ngOnInit(): void {
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
      content: ''
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

  deleteItem(id:number) {
    this.items.splice(id, id)
    this.reId()
  }

  reId() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i]["id"] = i;
    }
  }

  upItem(id:number) {
    if (id!==0) {
      let tempItem = this.items[id-1]
      this.items[id-1] = this.items[id]
      this.items[id] = tempItem
      this.reId()
    } 
  }

  downItem(id: number) {
    if(id!==this.items.length -1) {
      let tempItem = this.items[id+1]
      this.items[id+1] = this.items[id]
      this.items[id] = tempItem
      this.reId()
    }
  }

  showMethods(id:number) {
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
    let content = (<HTMLInputElement>document.getElementById("content")).value
    this.items[id]["text"] = content
    this.items[id]["content"] = content
    
    if((<HTMLInputElement>document.getElementById("enlace")).value != null) {
      this.items[id]["content"] = (<HTMLInputElement>document.getElementById("enlace")).value
    }
  }

  saveTemplate() {
    console.log("Uploading");
    let res = this.templateService.createTemplate(this.titulo, this.items)
    console.log(res);
  }

}
