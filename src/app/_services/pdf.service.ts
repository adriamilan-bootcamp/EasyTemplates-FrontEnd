import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pdf } from '../models/pdf.model';
import { jsPDF } from "jspdf";
import { v4 as uuid } from 'uuid';



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

    var blobPDF =  new Blob([ pdf ], { type : 'application/pdf'});

    const file = new File([ blobPDF ], title + '.pdf', { type: 'application/pdf' });
    
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

  viewPdf(id: any) {

    return this.http.get((url + 'api/pdfs/s3/' + id), { responseType: 'blob' }).subscribe(x => {

      var newBlob = new Blob([x], { type: "application/pdf" });

      const data = window.URL.createObjectURL(newBlob);
      
      var link = document.createElement('a');
      link.href = data;

      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  downloadPdf(id: any) {

    return this.http.get((url + 'api/pdfs/s3/' + id), { responseType: 'blob' }).subscribe(x => {
      const url = window.URL.createObjectURL(x);

      const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = uuid() + '.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

    }, error => {
      console.log(JSON.stringify(error));
    });

  }

  delete(id: any): Observable<Pdf> {
    return this.http.delete<Pdf>(url + "api/pdfs/" + id);

  }
}
