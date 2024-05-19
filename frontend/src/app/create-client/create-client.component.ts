import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})

export class CreateClientComponent {

  constructor(private clientService : ClientService, private router : Router){}

  data : any

  form = new FormGroup({
    fullName : new FormControl('', Validators.required),
    documentType : new FormControl('', Validators.required),
    document : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required)
  })

  createClient(){
    this.data = this.form.value
    this.clientService.createClient(this.data).subscribe(data=>
      {this.router.navigate(['/admin-login/manageAdmin'])}
    )
  }
}

