import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-beginning',
  templateUrl: './container-beginning.component.html',
  styleUrls: ['./container-beginning.component.css']
})
export class ContainerBeginningComponent implements OnInit {

  constructor(public router: Router) { }

  roles: string | undefined
  returnString: string | undefined
  isUnprivileged: boolean | undefined

  ngOnInit(): void {
    if (this.roles == 'ROLE_USER')
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
