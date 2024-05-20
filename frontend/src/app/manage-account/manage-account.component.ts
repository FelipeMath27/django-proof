import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import GetSavinsAccount from '../interfaces/GetSavingsAccount';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrl: './manage-account.component.css'
})
export class ManageAccountComponent implements OnInit {
  accountsClient : GetSavinsAccount [] = [];

  constructor(private accountService : AccountService, private authService : AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const email = this.authService.getEmailClient();
      if (email) {
        this.getSavingsAccount(email);
      } else {
        console.error('Email not found. User is not authenticated.'); 
      }
    }
  }

  getSavingsAccount(email : string) : void {
    this.accountService.getSavingsAccounts(email).subscribe(
      (data : GetSavinsAccount []) =>{
        this.accountsClient = data;
        console.log('Email del cliente autenticado:', this.authService.getEmailClient());
      },
      (error)=> {
        console.error('Error getting savings account', error)
      })  
    }
  }
