import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { InactiveClientComponent } from './inactive-client/inactive-client.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ViewClientComponent } from './view-client/view-client.component';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, AdminComponent, ClientComponent, CreateClientComponent, CreatePasswordComponent,
    InactiveClientComponent, LoginAdminComponent,LoginClientComponent,UpdateClientComponent,ViewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
