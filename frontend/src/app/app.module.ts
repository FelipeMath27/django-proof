import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ViewClientComponent } from './view-client/view-client.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient,withFetch } from '@angular/common/http';
import { ClientService } from './client.service';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';

@NgModule({
  declarations: [
    AppComponent, AdminComponent, ClientComponent, CreateClientComponent, CreatePasswordComponent, LoginAdminComponent,LoginClientComponent,ViewClientComponent, CreateAccountComponent, ManageAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
