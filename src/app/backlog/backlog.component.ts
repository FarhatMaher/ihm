import { ConfirmationComponent } from './../confirmation/confirmation.component';
import { AddtobacklogComponent } from './../addtobacklog/addtobacklog.component';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { BacklogDataSource } from './backlog-datasource';
import { ListService } from '../list.service';
import { UpdateBacklogComponent } from '../update-backlog/update-backlog.component';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  priority = '' ;
  userstory = '';
  complexity = '' ;
  backlog  ;
  confirmerdelete = '' ;
  constructor(private listservice: ListService , private dialog: MatDialog) {

  }
  public dataSource = new MatTableDataSource<any>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'userstory', 'priority' , 'complexity' , 'operations'];

  ngOnInit() {
    this.dataSource.sort = this.sort;


    this.listservice.getBacklog().
    subscribe(backlog => { this.dataSource.data = backlog.reverse() ;
       this.backlog = backlog ; });


  }
  do() {

    const dialogRef = this.dialog.open(AddtobacklogComponent, {
      width: '500px',
      height: '600px',
      data: {id: this.backlog.length , userstory: this.userstory , complexity : this.complexity , priority: this.priority}
    });

    dialogRef.afterClosed().subscribe(newbacklog => {

console.log(newbacklog);
      if (newbacklog) {
    this.listservice.postbacklog(newbacklog).subscribe(
      backlog => {
        this.listservice.getBacklog().subscribe(
          backlog => {this.dataSource.data = backlog.reverse() ; this.backlog = backlog ;});
      }
    );

}

     }) ;


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUserStory(id) {
this.confirmer('Are you Sure ?', id) ;
// 
  }


  confirmer(msg , id) {
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

     dialogConfig.width = '300px' ;
    dialogConfig.height = '200px' ;
    dialogConfig.data = {
    message : msg ,
    confirm : this.confirmerdelete
    };

    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
     
    if (result) {
      this.listservice.deletebacklog(id).subscribe(data => {
        
        this.listservice.getBacklog().
        subscribe(backlog => { this.dataSource.data = backlog.reverse() ;
           this.backlog = backlog ; });

      });

}
    }) ;


  }

  UpdateUserStory(userstory) {
    const dialogRef = this.dialog.open(UpdateBacklogComponent, {
      width: '500px' ,
      height: '600px',
      data: { data: userstory }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listservice.getBacklog().subscribe(
        backlog => {
          this.dataSource.data = backlog.reverse();
       
        },

        error => console.log(error),

      );
    });
  }
}
