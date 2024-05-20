import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginClientComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const clientData = { email: this.email, password: this.password }; // Ajusta los nombres de los campos
    this.http.post<any>('http://127.0.0.1:8000/manageClient/login_client/', clientData)
      .subscribe(response => {
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