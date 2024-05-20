import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClientService } from '../client.service';
import Client from '../interfaces/Client';
import { DocumentType, StateType } from '../interfaces/Client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {

  documentTypes: DocumentType[] = ['CC', 'CE', 'NIT', 'TI'];
  stateTypes: StateType[] = ['ACT', 'INA'];

  form: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.form = this.fb.group({
      str_fullname_client: ['', Validators.required],
      str_type_identification: ['', Validators.required],
      str_identification_number: ['', Validators.required],
      str_email_client: ['', [Validators.required, Validators.email]],
      str_state: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const clientData: Client = {
        str_fullname_client: this.form.value.str_fullname_client,
        str_type_identification: this.form.value.str_type_identification,
        str_identification_number: this.form.value.str_identification_number,
        str_email_client: this.form.value.str_email_client,
        str_state: this.form.value.str_state
      };

      this.clientService.createClient(clientData).subscribe(
        (response) => {
          console.log('Client created successfully:', response);
          // Aquí puedes redirigir a otra página o realizar otras acciones después de crear el cliente
        },
        (error) => {
          console.error('Error creating client:', error);
          // Maneja el error según sea necesario
        }
      );

      this.isFormSubmitted = true;
    }
  }
}
