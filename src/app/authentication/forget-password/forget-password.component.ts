import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  constructor(private router: Router) {}

  authentication() {
    this.router.navigate(['login']);
    // console.log(this.login);
  }
  confirmpassword() {
    this.router.navigate(['confirm']);
    // console.log('hhhhhhhhhhhh===========');
  }
}
