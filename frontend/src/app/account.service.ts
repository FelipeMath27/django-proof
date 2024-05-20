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

}
