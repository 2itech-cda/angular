import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRegister } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // 201 Created
  register(obj: UserRegister): Observable<User> {
    return this.http.post<User>('http://localhost:3000/register', obj);
  }

}
