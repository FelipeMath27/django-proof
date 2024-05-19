import { Injectable } from '@angular/core';
import Client from './interfaces/Client'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl : string = "http://127.0.0.1:8000/client/createClient" 
  constructor(private http: HttpClient) { }

  createClient(client : Client):Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}+client/`, client)
  }

  updateClient(id: number, client : Client):Observable<Client>{
    return this.http.put<Client>(`${this.apiUrl}+client/${id}/`,client)
  }

  viewClient(id: number) : Observable<Client>{
    return this.http.get<Client>(`${this.apiUrl}+client/+${id}`)
  }

  deleteClient(id: number, client : Client) :Observable<Client>{
    return this.http.put<Client>(`${this.apiUrl}+client/${id}/`,client)
  }

}
