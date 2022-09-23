import { Component, OnInit } from '@angular/core';
import { LogOutComponent } from '../log-out/log-out.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../models/image.model';
import { ImageService } from '../_services/image.service';
import { SecurityService } from '../_services/security.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-img-user',
  templateUrl: './img-user.component.html',
  styleUrls: ['./img-user.component.css']
})
export class ImgUserComponent implements OnInit {

  imgs?: Image[];
  img?: Image = {
    id: '',
    fechaCreacion: '',
    src: ''


  };


  valuePlaceholder: any;
  public formSearch: FormGroup;
  public default = 'select';

  constructor(private imgService: ImageService, private fb: FormBuilder, private router: Router,private secService:SecurityService) {
    this.formSearch = this.fb.group({
      options: '',

    })
  }

  ngOnInit(): void {
    console.log("ID: " + this.secService.getId())
    this.seeByUser(this.secService.getId()); 
  }

  selectedFile: ImageSnippet | undefined;

  onChange(f: any) {
    console.log(f.value);
    this.valuePlaceholder = f.value['options'];
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imgService.uploadImage(this.selectedFile.file).subscribe(
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


  seeByUser(id:any) {
 
    this.imgService.getByUserId(id)
      .subscribe(
        data => {
          this.imgs = data;
          console.log("Datos: " + JSON.stringify(data))
          console.log("images: " + data);
        },
        error => {
          console.log("error listar images: " + error);

        }
      );
    //(<HTMLInputElement>document.getElementById("inputI")).value = '';
  }


  deleteImg(id: any) {


    let c = "Are you sure you want to delete?"
    if (confirm(c) == true) {
      this.imgService.delete(id)
        .subscribe(
          response => {
            console.log("respuesta eliminar img->" + response);
            this.ngOnInit();
            alert("Image deleted");
            
            
          }, error => {
            console.log(error);

          }
        );
    } else {
      this.ngOnInit();
    }

  }

}
