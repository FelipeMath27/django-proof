import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import Client from '../interfaces/Client';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  clients: Client[] =[]

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }
}