import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { SecurityService } from '../_services/security.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private tokenStorageService: SecurityService, public router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }


  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/home']);
  }

}
