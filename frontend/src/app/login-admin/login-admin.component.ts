import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import Admin from '../interfaces/Admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-admin.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginAdminComponent {
  
  admin: Admin = {
    str_user_admin: '',
    str_pasw: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  loginAdmin() {
    this.authService.signIn(this.admin).subscribe(
      (response) => {
        if (response.message === 'Login successful') {
          this.router.navigate(['/manageAdmin']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
