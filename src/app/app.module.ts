
import { Pipes } from './pipes';
import { SecondeModule } from './seconde/seconde.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GetusersComponent } from './getusers/getusers.component';
import { NavComponent } from './nav/nav.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AllusersComponent } from './allusers/allusers.component';
import {NgxWebstorageModule} from 'ngx-webstorage';



@NgModule({
  declarations: [
    AppComponent, // for comp
Pipes,
 HomeComponent, LoginComponent, GetusersComponent, NavComponent, DashbordComponent, RegisterComponent, ProfileComponent, AllusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SecondeModule ,
    FormsModule     , HttpClientModule  , NgxWebstorageModule  // for modules


  ],
  providers: [], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
