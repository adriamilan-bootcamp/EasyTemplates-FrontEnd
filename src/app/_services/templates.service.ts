import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../models/template.model';

const url = "https://easy-templates-backend.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private http: HttpClient) { }

  getAllTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>(url + "api/plantillas");
  }

  getTemplateByID(id: any): Observable<Template> {
    return this.http.get<Template>(url + "api/plantillas/" + id);
  }

  getTemplateByUserId(id: any): Observable<Template> {
    return this.http.get<Template>(url + "api/usuarios_plantillas/" + id);
  }


  createTemplate() {
    // post api/plantilla
   }

  updateTemplate() {
    //put  api/plantilla/{id} ?? o put api/usuarios_plantillas/{id} ??
   }

  deleteUser(id: any): Observable<Template> {
    return this.http.delete<Template>(url + "api/palantilla/" + id);

  }
}
