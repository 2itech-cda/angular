import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(null);

    const data = localStorage.getItem('user_storage');
    if (data !== 'undefined') {
      const user = JSON.parse(data);
      this.userSubject.next(user);
    }
  }

  login(email: string, password: string) {
    const u = {email: email, password: password};

    // pipe === tunel > map 
    return this.http.post('http://localhost:3000/login', u)
        .pipe(
          map((data: any) => {
            localStorage.setItem('user_token', data.token);

            const user = new User();
            user.email = email;

            this.userSubject.next(data.user);
          })
        );
  }

  logout(): void {
    localStorage.removeItem('user_storage');
    localStorage.removeItem('user_token');

    this.userSubject.next(null);
  }

  get user(): User {
    return this.userSubject.value;
  }
}
