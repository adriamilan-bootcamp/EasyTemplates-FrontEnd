import { Component, OnInit } from '@angular/core';

import { SecurityService } from '../_services/security.service';

@Component({
  selector: 'app-top-beginning',
  templateUrl: './top-beginning.component.html',
  styleUrls: ['./top-beginning.component.css']
})
export class TopBeginningComponent implements OnInit {

  isLoggedIn = false;

  constructor(private tokenStorageService: SecurityService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

}
