import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN: string = 'JWT_TOKEN';
  private loggedUser: string = '';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private router = inject(Router);
  private http = inject(HttpClient);
  // sometimes localStorage dont work so this is like a workaround
  private localStorage = inject(LocalStorageService);

  constructor() { }

  signup(user: User): Observable<any> {
    console.log('email: ', user.email, 'password: ', user.password);
    //you must change this to what ever localhost you will be runnig on you server
    return this.http.post('http://localhost:3000/api/auth/signup', user);
  }

  login(user: User): Observable<any> {
    //you must change this to what ever localhost you will be runnig on you server
    return this.http
      .post('http://localhost:3000/api/auth/login', user)
      .pipe(
        tap((tokens: any) => {
          this.doLoginUser(user.email??'', JSON.stringify(tokens.data));
        })
      );
  }

  private doLoginUser(email: string, token: string): void {
    this.loggedUser = email;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(token: string): void {
    this.localStorage.set(this.JWT_TOKEN, token);
  }

  logout(): void {
    this.loggedUser = "";
    this.localStorage.remove(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/log-in']);
  }

  // decodes the jwt token to return the data of the currently  logged in user
  // check in the auth.routes.ts in the api folder to in the login function to see how to add
  // additional data you would like for the user
  getCurrentUser(): JwtPayload | null {
    const token: string | null = this.localStorage.get(this.JWT_TOKEN);
    if (token) {
      try {
        return jwtDecode(token);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  // checks if the current jwt token is expired
  isTokenExpired(): boolean {
    const token: string | null = this.localStorage.get(this.JWT_TOKEN);
    if (!token) return true;
    const decoded: JwtPayload = jwtDecode(token);
    if (!decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();

    return expirationDate < now;
  }

  // checks if there is a user that is currently logged in
  isLoggedIn(): boolean {
    return !!this.localStorage.get(this.JWT_TOKEN);
  }
}
