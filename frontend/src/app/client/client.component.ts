import { Component } from '@angular/core';
import LoginClient from '../interfaces/LoginClient';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export class ClientComponent {

  client : LoginClient = {
    email : '',
    new_password: ''
  }

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  logoutClient() {
    this.authService.signOutClient().subscribe(
      (response) => {
        if (response.message === 'Logout successful') {
          this.router.navigate(['/client-login']);
        } else {
          this.errorMessage = 'Error during logout.';
        }
      },
      (error) => {
        this.errorMessage = 'Error during logout. Please try again later.';
      }
    );
  }
  
}
