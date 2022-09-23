import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-constructor',
  templateUrl: './pdf-constructor.component.html',
  styleUrls: ['./pdf-constructor.component.css']
})
export class PdfConstructorComponent implements OnInit {

  constructor() { }

  items:any = [{"id":0,"editvisible":true,"type":"h1","text":"test","content":"test"},{"id":1,"editvisible":false,"type":"img","text":"Imagen","content":"../../assets/img/image-pl.png"},{"id":2,"editvisible":false,"type":"h2","text":"test","content":"test"},{"id":3,"editvisible":false,"type":"h3","text":"Subtitulo 2","content":""},{"id":4,"editvisible":false,"type":"h4","text":"Texto","content":""},{"id":5,"editvisible":false,"type":"espacio","text":"Espacio en Blanco","content":""},{"id":6,"editvisible":false,"type":"linea","text":"Espacio con Linea","content":""},{"id":7,"editvisible":false,"type":"img","text":"Imagen","content":"../../assets/img/image-pl.png"},{"id":8,"editvisible":false,"type":"enlace","text":"Enlace","content":""},{"id":9,"editvisible":true,"type":"firma","text":"Firma","content":""}];

  ngOnInit(): void {
  }

}
