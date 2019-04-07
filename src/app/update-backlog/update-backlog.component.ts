import { UserService } from './../user.service';
import { ListService } from './../list.service';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-update-backlog',
  templateUrl: './update-backlog.component.html',
  styleUrls: ['./update-backlog.component.css']
})
export class UpdateBacklogComponent implements OnInit {
UserSotry: {'userstory': '' , 'complexity': '' , 'priority':'' };
  constructor(@Inject(MAT_DIALOG_DATA) public data , 
  private listservice: ListService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.UserSotry = this.data.data ;
    console.log(this.UserSotry);

  }

  updateUserstory() {

    this.listservice.putbacklog(this.UserSotry).subscribe(
      data => {console.log(data);  this.openModal('User updated successfully') ; }
    );
  }

  openModal(msg) {
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

     dialogConfig.width = '300px' ;
    dialogConfig.height = '200px' ;
    dialogConfig.data = {
    message : msg
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

   /* dialogRef.afterClosed().subscribe(result =>
 
    );*/
  }

}
