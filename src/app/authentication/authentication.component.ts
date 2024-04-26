import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  $vent: FormGroup<any> | undefined;
  authenticationdata(arg0: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    if (localStorage.getItem('isAuth') == 'true') {
      this.router.navigate(['/', 'home']);
    }
  }

  forms: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  authentication() {
    // console.log('loging.....');

    let username = this.authService.authentication(
      this.forms.value.username,
      this.forms.value.password
    );

    if (!username) {
      alert('Invalid username or password');
      // console.log('Invalid useername or password');
    } else {
      localStorage.setItem('isAuth', 'true');
      window.location.replace('/home');
      this.router.navigateByUrl('/home');
      // localStorage.clear()
    }
  }
}
