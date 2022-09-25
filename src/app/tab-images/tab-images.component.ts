import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../models/image.model';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-tab-images',
  templateUrl: './tab-images.component.html',
  styleUrls: ['./tab-images.component.css']
})
export class TabImagesComponent implements OnInit {
  imgs?: Image[];
  img?: Image = {
    id: '',
    fechaCreacion: '',
    src: ''


  };


  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';

  constructor(private imgService: ImageService, private fb: FormBuilder, private router: Router) {
    this.formSearch = this.fb.group({
      options: '',

    })
  }

  ngOnInit(): void {
 this.seeAllImg();

  }

  seeAllImg(): void {
    (<HTMLInputElement>document.getElementById("tablaImgs")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tablaUserId")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tablaID")).style.display = "none";
 
    this.imgService.getAll()
      .subscribe(
        data => {
          this.imgs = data;
          console.log("imagenes: " + data);

        },
        error => {
          console.log("error listar imagenes: " + error);

        }
      );
  }

  onChange(f: any) {
    console.log(f.value);
    this.valuePlaceholder = f.value['options'];
  }

  seeById() {
    //eliminamos las tablas que no queremos que se vean
    (<HTMLInputElement>document.getElementById("tablaImgs")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tablaUserId")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tablaID")).style.display = "table";
    console.log("by id");
    this.imgService.getByID((<HTMLInputElement>document.getElementById("inputI")).value)
      .subscribe(
        data => {
          this.img = data;
          console.log("usuarios: " + data);

        },
        error => {
          console.log("error listar usuarios: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputI")).value = '';
  }

  seeByUser() {
    (<HTMLInputElement>document.getElementById("tablaImgs")).style.display = "none";
    (<HTMLInputElement>document.getElementById("tablaUserId")).style.display = "table";
    (<HTMLInputElement>document.getElementById("tablaID")).style.display = "none";

    this.imgService.getByUserId((<HTMLInputElement>document.getElementById("inputI")).value)
      .subscribe(
        data => {
          this.imgs = data;
          console.log("templates: " + data);
        },
        error => {
          console.log("error listar templates: " + error);

        }
      );
    (<HTMLInputElement>document.getElementById("inputI")).value = '';
  }


  delete(id: any) {


    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.imgService.delete(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar imagen->" + response);
            window.location.reload();
            alert("Image deleted");

          }, error => {
            console.log(error);

          }
        );
    } else {
      window.location.reload();
    }

  }

}
