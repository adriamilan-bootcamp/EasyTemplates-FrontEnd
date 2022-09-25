import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from '../_services/templates.service';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent implements OnInit {

  constructor(private tmService: TemplatesService) { }

  @Input() id: any;

  items: any;

  ngOnInit(): void {
    this.tmService.getS3TemplateById(this.id).subscribe(
      data => {
        this.items = data;
        console.log(this.items);
        
      }, error => {
        console.log(error);
      }
    )
    
  }

}
