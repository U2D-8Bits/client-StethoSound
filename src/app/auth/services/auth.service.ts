
import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';
import { environment } from '../../environments/environments';

@Injectable({providedIn: 'root'})

export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() {
      this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean{
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;
  }

  // Todo: Metodo para iniciar sesion
  login(username:string, password:string): Observable<boolean>{

    const url = `${this.baseUrl}/auth/login`;
    const body = {username, password};

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        //! Todo sale bien
        map(({user, token}) => this.setAuthentication(user, token)),
        //! Errores
        catchError( error => throwError( () => error.error.message ))
      )
  }

  // Todo: Metodo para chequear el Token
  checkAuthStatus(): Observable<boolean>{

    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');

    if(!token) return of(false);

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers})
      .pipe(
        map( ({user, token}) => this.setAuthentication(user, token)),
        catchError( () => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false);
        })
      )
  }

}
