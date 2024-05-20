import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})

export class CreateAccountComponent {
  email: string = '';
  amount_balance: number = 0;

  constructor(private http: HttpClient, private router : Router) {}

  createAccount() {
    const data = {
      email: this.email,
      amount_balance: this.amount_balance
    };

    this.http.post('http://127.0.0.1:8000/manageClient/create_savings_account/', data)
    .subscribe(
      (response) => {
        console.log('Savings account created successfully', response);
        // Muestra un alert cuando la creación de la cuenta sea exitosa
        alert('Savings account created successfully');
        // Reinicia los campos del formulario
        this.email = '';
        this.amount_balance = 0;
        // Redirige al usuario a la ruta client-login/home
        this.router.navigateByUrl('/client-login/home');
      },
      (error) => {
        console.error('Error creating savings account', error);
        // Manejar errores aquí
        alert('Error creating savings account. Please try again later.');
      }
    );
  }
}
