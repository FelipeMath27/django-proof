import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router desde @angular/router
import ClientPsw from '../interfaces/ClientPsw';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router) { // Inyecta Router en el constructor
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', Validators.required] // Cambiado el nombre del campo a 'new_password'
    });
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const formData: ClientPsw = {
        email: this.passwordForm.value.email,
        new_password: this.passwordForm.value.new_password // Cambiado de 'password' a 'new_password'
      };

      // Verifica si la contraseña no está vacía
      if (formData.new_password.trim() === '') {
        console.error('Password cannot be empty');
        return;
      }

      this.authService.createPassword(formData).subscribe(
        response => {
          console.log('Password created successfully:', response);
          this.router.navigateByUrl('/client-login', { replaceUrl: true }); // Redirige al usuario a client-login y reemplaza la URL actual en el historial
        },
        error => {
          console.error('Error creating password:', error);
          // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
        }
      );
    } else {
      console.error('Form invalid');
    }
  }
}
