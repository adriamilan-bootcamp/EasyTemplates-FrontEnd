import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pdf } from '../models/pdf.model';

const url = "http://localhost:8080/"
  
const httpOptions = {
  headers: new HttpHeaders({
   "Content-Type": "multipart/form-data" // 👈
  })
};

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

    const object2Blob = (object: BlobPart) => new Blob([object]);

    const file = new File([object2Blob(JSON.stringify(pdf))], title, { type: 'application/json' });
    
    var formData: any = new FormData();
    formData.append('file', file);

    console.log("Data: " + JSON.stringify(formData));

    
    return this.http.post((url + 'api/pdfs?titulo=' + title), formData).subscribe(
      data => {
        console.log(JSON.stringify(data));
      }, error => {
        console.log(JSON.stringify(error));
      }
    )
  }



  delete(id: any): Observable<Pdf> {
    return this.http.delete<Pdf>(url + "api/pdfs/" + id);

  }
}
