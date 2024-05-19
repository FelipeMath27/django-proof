import { Component } from '@angular/core';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css'
})
export class ViewClientComponent {

  client : any | undefined

  constructor(private clientService : ClientService){}

  ngOnInit() : void {
    this.clientService.viewClient(1).subscribe(data=> {
      this.client = data
      console.log(data);
    })
  }
}
