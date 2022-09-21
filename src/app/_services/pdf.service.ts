import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pdf } from '../models/pdf.model';

const url = "https://easy-templates-backend.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pdf[]> {
    return this.http.get<Pdf[]>(url + "api/pdfs");
  }

  getByID(id: any): Observable<Pdf> {
    return this.http.get<Pdf>(url + "api/pdfs/" + id);
  }

  getByUserId(id: any): Observable<Pdf[]> {
    return this.http.get<Pdf[]>(url + "api/usuarios_pdfs/" + id);
  }

  getByTitle(title: any): Observable<Pdf[]> {
    return this.http.get<Pdf[]>(url + "api/pdfs/title/" + title);
  }

  addPdf() {
    // post 
  }



  delete(id: any): Observable<Pdf> {
    return this.http.delete<Pdf>(url + "api/pdfs/" + id);

  }
}
