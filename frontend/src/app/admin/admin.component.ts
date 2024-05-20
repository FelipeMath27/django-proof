import { Component } from '@angular/core';
import Admin from '../interfaces/Admin';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  showMaintenance() {
    alert('In maintenance')
  }

  admin: Admin = {
    str_user_admin: '',
    str_pasw: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  logoutAdmin() {
    this.authService.signOut().subscribe(
      (response) => {
        if (response.message === 'Logout successful') {
          this.router.navigate(['/admin-login']);
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
