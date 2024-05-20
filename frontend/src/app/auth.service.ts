import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Admin from './interfaces/Admin';
import ClientPsw from './interfaces/ClientPsw';
import LoginClient from './interfaces/LoginClient';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  private emailClient: string = '';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object)  { 
    if (isPlatformBrowser(this.platformId)) {
      const storedEmail = localStorage.getItem('emailClient');
      if (storedEmail) {
        this.emailClient = storedEmail;
        this.isAuthenticated = true;
      }
    }
  }

  signIn(admin: Admin): Observable<any> {
    const payload = {
      username: admin.str_user_admin,
      password: admin.str_pasw
    };
    return this.http.post<any>('http://127.0.0.1:8000/admin/signin/', payload);
  }

  signOut(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/admin/signout/', {});
  }

  createPassword(data: ClientPsw): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/manageClient/create_password/', data);
  }

  signInClient(client: LoginClient): Observable<any> {
    const payload = {
      email: client.email,
      password: client.new_password
    };
    return this.http.post<any>('http://127.0.0.1:8000/manageClient/login_client/', payload)
      .pipe(
        tap(response => {
          if (response.message === 'Login successful') {
            this.setEmailClient(client.email); 
            this.setAuthenticated();
            localStorage.setItem('emailClient', client.email);
          }
        })
      );
  }

  signOutClient(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/manageClient/logout_client/', {})
    .pipe(
      tap(response => {
        if (response.message === 'Logout successful') {
          this.emailClient = '';
          this.setUnauthenticated();
        }
      })
    );
  }

  public getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getEmailClient(): string {
    console.log(this.emailClient);
    return this.emailClient;
  }

  private setEmailClient(email: string): void {
    this.emailClient = email;
  }

  public setAuthenticated(): void {
    this.isAuthenticated = true;
  }

  public setUnauthenticated(): void {
    this.isAuthenticated = false;
  }
  
}