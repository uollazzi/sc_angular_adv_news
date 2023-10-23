import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginDTO, LoggedUser } from '../models/auth';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: LoginDTO): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(environment.JSON_SERVER_BASE_URL + "/login", model)
      .pipe(
        tap(user => {
          this.setLoggedUser(user);
        })
      )
  }

  // login(model: LoginDTO): Observable<LoggedUser> {
  //   return this.http.post<LoggedUser>(environment.JSON_SERVER_BASE_URL + "/login", model)
  //     .pipe(
  //       tap({
  //         next: user => {
  //           console.log(user);
  //           this.setLoggedUser(user);
  //         },
  //         error: (err: HttpErrorResponse) => {
  //           console.log(err.error);
  //           this.logout();
  //         }
  //       })
  //     )
  // }

  private setLoggedUser(user: LoggedUser) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem("user");

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    }

    return null;
  }

  get isUserLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  logout() {
    localStorage.removeItem("user");
  }
}
