import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.css'
})

export class CreatePasswordComponent {

  constructor(private clientService : ClientService, private router : Router){}

  data : any
  form = new FormGroup ({
    email : new FormControl('', Validators.required),
    documentType: new FormControl('', Validators.required),
    document : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  createPassword(){
    this.data = this.form.value
    if(this.form.valid){
      const data ={
        email : this.form.value.email,
        documentType : this.form.value.documentType,
        document : this.form.value.document,
        password : this.form.value.password
      };
    }
  }
}
