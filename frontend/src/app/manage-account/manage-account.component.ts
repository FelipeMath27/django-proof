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
  accountsClient: GetSavinsAccount[] = [];
  account_number: string = '';
  balance: number | undefined;
  isBalanceValid: boolean = true;
  showDeposit: boolean = false;
  showBalance: boolean = false;
  showWithdraw: boolean = false;
  depositAmount: number | undefined;
  withdrawAmount: number | undefined;
  otp: number | undefined;

  constructor(private accountService: AccountService, private authService: AuthService,
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

  getSavingsAccount(email: string): void {
    this.accountService.getSavingsAccounts(email).subscribe(
      (data: GetSavinsAccount[]) => {
        this.accountsClient = data;
        console.log('Email del cliente autenticado:', this.authService.getEmailClient());
      },
      (error) => {
        console.error('Error getting savings account', error);
      });  
  }

  getBalanceAccount(): void {
    if (!this.account_number) {
      console.error('Account number is required');
      return;
    }
    this.accountService.getAccountBalance(this.account_number).subscribe(
      (response: any) => { 
        if (response && typeof response.balance === 'number') { 
          this.balance = response.balance;
          this.isBalanceValid = true;
          this.showBalance = true;
          this.showDeposit = false;
        } else {
          this.isBalanceValid = false;
          this.showBalance = true; 
          this.showDeposit = false;
        }
      }, (error) => {
        console.error('Error getting account balance', error);
        this.isBalanceValid = false;
        this.showBalance = true; 
        this.showDeposit = false;
      }
    );
  }

  showDepositSection(): void {
    this.showDeposit = true;
    this.showBalance = false;
    this.showWithdraw = false;
  }

  confirmDeposit(): void {
    if (!this.account_number) {
      console.error('Account number is required');
      return;
    }
    if (this.depositAmount && this.depositAmount > 10000) {
      this.accountService.depositToAccount(this.account_number, this.depositAmount).subscribe(
        (response: any) => {
          console.log('Deposit successful:', response);
          alert('Successful deposit');
          this.showDeposit = false;
          this.depositAmount = undefined;
        },
        (error) => {
          console.error('Error making deposit:', error);
        }
      );
    } else {
      alert('Enter an amount greater than or equal to $10,000.')
      console.error('Invalid deposit amount');
    }
  }

  showWithdrawSection(): void {
    this.showWithdraw = true;
    this.showDeposit = false; 
    this.showBalance = false;
  }

  withdrawFromAccount(): void {
    if (!this.account_number) {
      console.error('Account number is required');
      return;
    }
    if (this.withdrawAmount && this.withdrawAmount >= 10000) { // Modificado el operador ">=" en lugar de ">"
      this.accountService.withdrawFromAccount(this.account_number, this.withdrawAmount).subscribe(
        (response: any) => {
          console.log('Withdrawal successful:', response);
          this.otp = response.verificate_code;
          alert('Successful withdrawal. OTP: ' + this.otp);
          this.showWithdraw = false; // Cambiado de "showDeposit" a "showWithdraw"
          this.withdrawAmount = undefined; // Cambiado de "depositAmount" a "withdrawAmount"
        },
        (error) => {
          console.error('Error making withdrawal:', error);
          alert('Error making withdrawal. Please try again.');
        }
      );
    } else {
      alert('Enter an amount greater than or equal to $10,000.')
      console.error('Invalid withdrawal amount');
    }
  }

  clearAccountNumber(): void {
    this.isBalanceValid = false;
    this.account_number = '';
    this.showDeposit = false;
    this.showWithdraw = false;
    this.showBalance = false;
  }
}
