import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

const url = "https://easy-templates-backend.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(url + "api/imagenes");
  }

  getByID(id: any): Observable<Image> {
    return this.http.get<Image>(url + "api/imagen/" + id);
  }

  getByUserId(id: any): Observable<Image[]> {
    return this.http.get<Image[]>(url + "api/usuarios_imagenes/" + id);
  }



  addImg(file: any): Observable<Image> {
    let data = {
      file: file
    }
    console.log("file----"+file);
    console.log("asdfad"+this.http.post<Image>(url + "api/imagen", JSON.stringify(data), { headers: { 'Content-Type': 'multipart/form-data' } }));
    
    return this.http.post<Image>(url + "api/imagen", JSON.stringify(data), { headers: { 'Content-Type': 'multipart/form-data' } });


  }



  delete(id: any): Observable<Image> {
    return this.http.delete<Image>(url + "api/imagen/" + id);

  }
}
