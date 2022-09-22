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

  messageFromParent : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  title(): any {
    let titleValueIn = '';
    //let $modal = $('#title-template');
    //$modal.on('click', '#paramsOkay', function (e) {//si se a clicado el ok
      //$('#title-template').hide();
      console.log("has clicado el ok");
      titleValueIn = (<HTMLInputElement>document.getElementById("title-tem")).value;
      this.messageFromParent = '<h1>' + titleValueIn + '</h1>';

      //$modal.on("hidden.bs.modal", function () {//si se a clicado el cancel
       // console.log("has clicado el cancel");
      //});
    //});
  }



}
