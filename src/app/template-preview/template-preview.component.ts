import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from '../_services/templates.service';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent implements OnInit {

  constructor(private tmService: TemplatesService) { }


  ngOnInit(): void {
    // In disuse
  }

}
