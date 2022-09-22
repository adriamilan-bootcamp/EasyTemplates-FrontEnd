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
    return this.http.get<Template>(url + "api/plantilla/" + id);
  }

  getTemplateByUserId(id: any): Observable<Template[]> {
    return this.http.get<Template[]>(url + "api/usuarios_plantillas/" + id);
  }

  getTemplateByTitle(title: any): Observable<Template[]> {
    return this.http.get<Template[]>(url + "api/usuarios_plantillas/" + title);
  }

  createTemplate(titulo: any, template: any) {

    let utc = new Date().toISOString().slice(0, 19)

    let data = {
      fecha_creacion: utc.toString().replace("T", " "),
      src: JSON.stringify(template),
      titulo: titulo
    }

    console.log(JSON.stringify(data));
    

    return this.http.post(url + 'api/plantilla', JSON.stringify(data), { headers: { 'Content-Type': 'application/json'}})
  }

  updateTemplate() {
    //put  api/plantilla/{id} ?? o put api/usuarios_plantillas/{id} ??
  }

  deleteTemplate(id: any): Observable<Template> {
    return this.http.delete<Template>(url + "api/plantilla/" + id);

  }


}
