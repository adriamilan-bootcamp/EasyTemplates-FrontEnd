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

  getTemplateByTitle(titulo: any): Observable<Template[]> {
    return this.http.get<Template[]>(url + "api/plantilla/titulo?title=" + titulo);
  }

  getS3TemplateById(id: any) {
    return this.http.get(url + "api/plantilla/s3/" + id);
  }

  createTemplate(titulo: any, template: any): Observable<Template> {
    const fileName = 'template.json';

    const object2Blob = (object: BlobPart) => new Blob([object]);

    const file = new File([object2Blob(JSON.stringify(template))], fileName, { type: 'application/json' });
    
    console.log("File: " + file)

    var formData: any = new FormData();
    formData.append('file', file);

    return this.http.post((url + 'api/plantilla?title=' + titulo), formData);
  }

  updateTemplate() {
    //put  api/plantilla/{id} ?? o put api/usuarios_plantillas/{id} ??
  }

  deleteTemplate(id: any): Observable<Template> {
    return this.http.delete<Template>(url + "api/plantilla/" + id);

  }
}
