import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.css',
})
export class ConfirmPasswordComponent {
  constructor(private router: Router) {}
  logindata(arg0: any) {
    throw new Error('Method not implemented.');
  }
  authentication() {
    this.router.navigate(['login']);
    // console.log(this.login);
  }
}
