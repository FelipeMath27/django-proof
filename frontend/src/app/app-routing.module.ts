import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { AdminComponent } from './admin/admin.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ClientComponent } from './client/client.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';


export const routes: Routes = [
  {path : '', redirectTo: 'client-login', pathMatch: 'full'},
  {path : 'admin-login', component: LoginAdminComponent},
  {path : 'client-login', component: LoginClientComponent},
  {path : 'create-password' , component : CreatePasswordComponent},
  {path : 'manageAdmin', component: AdminComponent},
  {path : 'manageAdmin/createClient', component: CreateClientComponent},
  {path : 'manageAdmin/getClient/:document', component: ViewClientComponent},
  {path : 'client-login/home', component : ClientComponent},
  {path : 'client-login/home/createAccount', component : CreateAccountComponent },
  {path : 'client-login/home/manageAccount', component : ManageAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
