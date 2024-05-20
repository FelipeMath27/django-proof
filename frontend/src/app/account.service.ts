import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import GetSavinsAccount from './interfaces/GetSavingsAccount'


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accounts: GetSavinsAccount[] = [];


  constructor(private http: HttpClient) { }

  getSavingsAccounts(email : string): Observable<GetSavinsAccount[]> {
    return this.http.get<GetSavinsAccount[]>(`http://127.0.0.1:8000/manageClient/get_savings_account/${email}`).pipe(
      tap(accounts => this.accounts = this.accounts)
    );
  }

  getAccountBalance(account_number : string): Observable<number>{
    return this.http.get<number>(`http://127.0.0.1:8000/manageClient/get_balance_accout/${account_number}`)
  }

  depositToAccount(accountNumber: string, amount: number): Observable<any> {
    return this.http.patch<any>(`http://127.0.0.1:8000/manageClient/deposit_savings_account/${accountNumber}`, { deposit: amount });
  }

  withdrawFromAccount(accountNumber: string, amount: number): Observable<any> {
    return this.http.patch<any>(`http://127.0.0.1:8000/manageClient/withdraw_account/${accountNumber}`, { withdraw: amount });
  }

}
