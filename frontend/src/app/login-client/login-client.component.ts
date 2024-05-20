import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import LoginClient from '../interfaces/LoginClient';


@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginClientComponent {

  client : LoginClient = {
    email:  '',
    new_password: ''
  };
  

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  loginClient() {
      this.authService.signInClient(this.client).subscribe(response => {
        console.log(response);
        if (response.message === 'Login successful') {
          this.router.navigate(['/client-login/home']);
        }
      }, error => {
        console.error(error);
        alert('Invalid email or password. Please try again.');
      });
  }
}