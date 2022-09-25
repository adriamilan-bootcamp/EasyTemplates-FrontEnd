import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROLES_KEY } from '../_services/security.service'

@Component({
  selector: 'app-dashboard-beginning',
  templateUrl: './dashboard-beginning.component.html',
  styleUrls: ['./dashboard-beginning.component.css']
})
export class DashboardBeginningComponent implements OnInit {

  constructor(public router: Router) { }

  roles: string | undefined
  returnString: string | undefined
  isUnprivileged: boolean | undefined
  
  ngOnInit(): void {
    this.roles =  window.sessionStorage.getItem(ROLES_KEY)!;

    if (this.roles != 'ROLE_ADMIN' && this.roles == 'ROLE_USER')
    {
      this.returnString = "User already logged in, returning to dashboard..."
      this.isUnprivileged = true;
      setTimeout(() =>
      {
        this.router.navigate(['/user-dashboard']);
      }, 3000)
    }
    else if (this.roles == 'ROLE_ADMIN')
    {
      this.returnString = "Admin already logged in, returning to dashboard..."
      this.isUnprivileged = true;

      setTimeout(() =>
      {
        this.router.navigate(['/admin-dashboard']);
      }, 3000)
    }
  }
  
}
