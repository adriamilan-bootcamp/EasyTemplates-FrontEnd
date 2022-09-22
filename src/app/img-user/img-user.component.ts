import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../models/image.model';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-img-user',
  templateUrl: './img-user.component.html',
  styleUrls: ['./img-user.component.css']
})
export class ImgUserComponent implements OnInit {

  imgs?: Image[];
  img?: Image = {
    id: '',
    date: '',
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
    this.seeByUser(1);
  }



  onChange(f: any) {
    console.log(f.value);
    this.valuePlaceholder = f.value['options'];
  }



  seeByUser(id: any) {

    this.imgService.getByUserId(id)
      .subscribe(
        data => {
          this.imgs = data;
          console.log("iamgenes: " + data);
        },
        error => {
          console.log("error listar imagenes: " + error);

        }
      );

  }


  delete(id: any) {


    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.imgService.delete(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar user->" + response);
            window.location.reload();
            alert("User deleted");

          }, error => {
            console.log(error);

          }
        );
    } else {
      window.location.reload();
    }

  }


  add() {
    this.imgService.addImg((<HTMLInputElement>document.getElementById("file")).value)
      .subscribe(
        data => {
          this.img = data;
          console.log("img guardada: " + data);
        },
        error => {
          console.log("error guardar img: " + error);

        }
      );
  }

}
