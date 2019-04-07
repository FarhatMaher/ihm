
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ProfileComponent } from './profile/profile.component';

import { GetusersComponent } from './getusers/getusers.component';
import { HomeComponent } from './home/home.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { BacklogComponent } from './backlog/backlog.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: '' , redirectTo: '/login' , pathMatch: 'full'} ,


{path: 'login' , component: LoginComponent} ,
{path: 'home' , component: HomeComponent, canActivate: [AuthGuardService] , children: [
  { path: 'dragdrop' , component: DragDropComponent} ,
  { path: 'backlog' , component: BacklogComponent} ,
  { path: 'dashboard' , component: DashboardComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

