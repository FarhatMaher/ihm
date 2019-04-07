import { ModalComponent } from './../modal/modal.component';
import { AddProjectComponent } from './../add-project/add-project.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects ;


cards ;
  constructor(private breakpointObserver: BreakpointObserver , private listservice: ListService,
    private dialog: MatDialog) {}
data ;
  ngOnInit() {

  this.listservice.getProject().subscribe(projects => {

this.projects = projects ;
  /** Based on the screen size, switch from standard to one column per row */
  this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
    

      return [
        { title: 'Inroduction' , subtitle: 'Welcome to our management system' , cols: 1, rows: 1 },
        { title: 'Projects', cols: 1, rows: 1 ,
         projects: this.projects




      },

      ];
    })
  );


  });
  }

  do() {

    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '300px',
      height: '300px',
      data: {data: this.data}
    });

    dialogRef.afterClosed().subscribe(result => {
    const project = {'responsable' : localStorage.getItem('username') , 'name': result};
    this.listservice.postProject(project).subscribe(
      projects => {this.projects = projects ;

        this.openModal('Project added successfully');
        this.listservice.getProject().subscribe(projects => {this.projects = projects ;



          this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
            map(({ matches }) => {
              
        
              return [
                { title: 'Inroduction' , subtitle: 'Welcome to our management system' , cols: 1, rows: 1 },
                { title: 'Projects', cols: 1, rows: 1 ,
                 projects: this.projects
        
        
        
        
              },
        
              ];
            })
          );


        
        } );

      }
    );

     }) ;


  }

  openModal(msg ) {
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

     dialogConfig.width = '300px' ;
    dialogConfig.height = '200px' ;
    dialogConfig.data = {
    message : msg
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

}

}
