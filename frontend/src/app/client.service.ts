import { Injectable } from '@angular/core';
import Client from './interfaces/Client';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl : string = "http://127.0.0.1:8000/manageClient/" 
  private apiUrlPasw : string = "http://127.0.0.1:8000/client/createPassword"

  constructor(private http: HttpClient) { }

  createClient(client : Client): Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}client/`, client)
  }

  getClientsId(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}client/${id}`);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}client/`);
  }
}
