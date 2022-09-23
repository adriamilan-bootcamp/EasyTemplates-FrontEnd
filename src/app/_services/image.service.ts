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

  public uploadImage(image: File): Observable<Image> {
    const formData = new FormData();

    formData.append('file', image);

    return this.http.post(url + "api/imagen", formData);
  }

  addImg() {
    // post api/imagen
  }



  delete(id: any): Observable<Image> {
    return this.http.delete<Image>(url + "api/imagen/" + id);

  }
}
