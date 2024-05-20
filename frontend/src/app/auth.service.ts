import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Admin from './interfaces/Admin';
import ClientPsw from './interfaces/ClientPsw';
import LoginClient from './interfaces/LoginClient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

  signInClient(client : LoginClient): Observable<any>{
    const payload = {
      email: client.email,
      password: client.new_password
    };
    return this.http.post<any>('http://127.0.0.1:8000/manageClient/login_client/', payload)
  }

  signOutClient(): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/manageClient/logout_client/', {});
  }

}