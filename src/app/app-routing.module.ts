import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { GetusersComponent } from './getusers/getusers.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: '' , redirectTo: '/Accueil' , pathMatch: 'full'} ,
{path: 'Accueil' , component: HomeComponent} ,

{path: 'login' , component: LoginComponent} ,
{path: 'dashboard' , component: DashbordComponent , canActivate: [ AuthGuardService]} ,
{path: 'profile' , component: ProfileComponent},
{path: 'register' , component: RegisterComponent} ,
{path: 'allusers', component: AllusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

