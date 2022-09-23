import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROLES_KEY } from '../_services/security.service'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public router: Router) { }


  roles: string | undefined
  returnString: string | undefined
  isUnprivileged: boolean | undefined

  ngOnInit(): void {
    this.roles =  window.sessionStorage.getItem(ROLES_KEY)!;

    if (this.roles == 'ROLE_ADMIN')
    {
      this.returnString = "Logged in as admin, returning to the admin dashboard in 3 seconds..."
      this.isUnprivileged = true;
      setTimeout(() =>
      {
        this.router.navigate(['/admin-dashboard']);
      }, 3000)
    }
    else if (this.roles != 'ROLE_ADMIN' && this.roles != 'ROLE_USER')
    {
      this.returnString = "Client not logged in, returning to home..."
      this.isUnprivileged = true;

      setTimeout(() =>
      {
        this.router.navigate(['/home']);
      }, 3000)
    }
  }

}
