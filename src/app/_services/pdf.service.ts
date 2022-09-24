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
    return this.http.get<Pdf[]>(url + "api/pdfs/titulo?title=" + title);
  }

  addPdf(title: any, pdf: any) {

    var formData: any = new FormData();
    formData.append('file', pdf);

    console.log("File: " + pdf)

    return this.http.post((url + 'api/pdfs?titulo=' + title), formData).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }



  delete(id: any): Observable<Pdf> {
    return this.http.delete<Pdf>(url + "api/pdfs/" + id);

  }
}
