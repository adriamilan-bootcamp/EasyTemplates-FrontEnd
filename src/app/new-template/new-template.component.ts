import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Input } from '@angular/core';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {

  titleValueOut?: string;

  messageFromParent: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  title(): any {
    let titleValueIn = '';
    titleValueIn = (<HTMLInputElement>document.getElementById("title-tem")).value;
    this.titleValueOut = '<h1>' + titleValueIn + '</h1';

    this.messageFromParent = this.ConvertStringToHTML(this.titleValueOut);
    <HTMLInputElement>document.getElementById("document")?.appendChild(this.messageFromParent);
    console.log(this.messageFromParent);

  }

  ConvertStringToHTML(str: string) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    console.log(doc.body.lastElementChild);
   
    
    return doc.body.lastElementChild;
  };

}
