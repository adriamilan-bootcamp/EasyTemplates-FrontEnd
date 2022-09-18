import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  id1:number = 0;
  id2:number = 0;
  id3:number = 0;
  id4:number = 0;
  id5:number = 0;
  id6:number = 0;
  id7:number = 0;
  id8:number = 0;
  url:string = '';
  baseurl:string = 'https://easy-templates-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
