import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {
  client : any
  data : any

  constructor(private clientService: ClientService, private route : ActivatedRoute, private router : Router){}

  ngOnInit() : void {
    let id = this.route.snapshot.params['id']
    this.clientService.viewClient(id).subscribe(data=> {
      this.client = data
      console.log(data)
    })
  }

  form = new FormGroup({
    email : new FormControl('', Validators.required)
  })

  submit(){
    this.data = this.form.value
    this.client.email = this.data.email
    console.log(this.data)

    this.clientService.updateClient(this.client?.id, this.client).subscribe(data=>{
      console.log(data)
    })

    this.router.navigate(['/admin-login/manageAdmin'])  
  }
  
}
