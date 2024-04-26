import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      name: 'USER',
      username: 'user',
      password: '123',
    },
    {
      id: 2,
      name: 'ADMIN',
      username: 'admin',
      password: '123',
    },
  ];

  session: any;
  constructor() {}

  authentication(username: string, password: string) {
    let user = this.users.find(
      (u: { username: string; password: string }) =>
        u.username === username && u.password === password
    );
    if (username) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return user;
  }
}
