import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:44345/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  CurrentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {

        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })

    )
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.cureentUserSource.next(user);
        }
        return user;
      })
    )
  }
  setCurrentUser(user: User) {
    this.cureentUserSource.next(user);
  }
  logout() {

    localStorage.removeItem('user');
    this.cureentUserSource.next(null);
  }
}
