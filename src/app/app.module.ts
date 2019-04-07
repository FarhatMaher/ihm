import { InscriptionComponent } from './inscription/inscription.component';
import { ModalComponent } from './modal/modal.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';

import { Pipes } from './pipes';
import { SecondeModule } from './seconde/seconde.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { GetusersComponent } from './getusers/getusers.component';
import { NavComponent } from './nav/nav.component';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AllusersComponent } from './allusers/allusers.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddTodoComponent } from './add-todo/add-todo.component';




import { MatSidenavModule, MatIconModule,
  MatListModule, MatTableModule, MatSortModule, MatGridListModule, MatMenuModule,
  MatDialogModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatInputModule,
  MatSelectModule , MatButtonModule, MatSnackBarModule, MatRadioModule, MatTreeModule,
   MatToolbarModule, MatPaginatorModule} from '@angular/material';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastComponent } from './toast/toast.component';
import { HomeComponent } from './home/home.component';
import { BacklogComponent } from './backlog/backlog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddtobacklogComponent } from './addtobacklog/addtobacklog.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UpdateBacklogComponent } from './update-backlog/update-backlog.component';


@NgModule({
  declarations: [
    AppComponent, // for comp

  AddTodoComponent , HowToUseComponent ,
  ModalComponent , InscriptionComponent, DragDropComponent ,
  ToastComponent , HomeComponent, LoginComponent, BacklogComponent
  , DashboardComponent, AddProjectComponent, AddtobacklogComponent, ConfirmationComponent, UpdateBacklogComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule, SecondeModule ,
    FormsModule     , HttpClientModule , BrowserAnimationsModule , // for modules

    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatSnackBarModule, MatRadioModule, MatTreeModule ,
    MatCheckboxModule ,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,

    MatCardModule,

    DragDropModule,

    LayoutModule,

    MatToolbarModule,

    MatPaginatorModule ,
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}], // service
  bootstrap: [AppComponent] ,
  entryComponents: [LoginComponent , AddTodoComponent , HowToUseComponent
    , ModalComponent , InscriptionComponent , ToastComponent , AddProjectComponent , AddtobacklogComponent ,
  ConfirmationComponent , UpdateBacklogComponent]
})
export class AppModule { }
