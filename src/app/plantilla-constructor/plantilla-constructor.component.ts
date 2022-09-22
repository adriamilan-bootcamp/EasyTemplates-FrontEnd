import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

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
      btnvisible: false,
      type: 'h1',
      text: 'Titulo'
    }
    this.items.push(item)
    this.index++
    console.log(this.items)
  }

  addSubtitle() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'h2',
      text: 'Subtitulo',
    }
    this.items.push(item)
  }

  addSubtitle2() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'h3',
      text: 'Subtitulo 2',
    }
    this.items.push(item)
  }

  addText() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'h4',
      text: 'Texto',
    }
    this.items.push(item)
  }

  addImage() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'img',
      text: 'Imagen',
    }
    this.items.push(item)
  }

  addEspacioLinea() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'linea',
      text: 'Espacio con Linea',
    }
    this.items.push(item)
  }

  addEspacioBlanco() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'espacio',
      text: 'Espacio en Blanco',
    }
    this.items.push(item)
  }

  addFirma() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'firma',
      text: 'Firma',
    }
    this.items.push(item)
  }

  addEnlace() {
    var item = {
      id: this.items.length,
      btnvisible: false,
      type: 'enlace',
      text: 'Enlace',
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
    if (this.items[id]["btnvisible"]) {
      this.items[id]["btnvisible"] = false
    } else {
      if (this.items[this.btnVisibleId]) {
        this.items[this.btnVisibleId]["btnvisible"] = false
        this.btnVisibleId = id; 
        this.items[id]["btnvisible"] = true
      } else {
        this.btnVisibleId = id; 
        this.items[id]["btnvisible"] = true
      }
    }
  }

}
