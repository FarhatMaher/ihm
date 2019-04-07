import { DialogData } from './../add-todo/add-todo.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Location } from '@angular/common';
@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css']
})
export class HowToUseComponent implements OnInit {
cheked = false ;
show = true ;
  constructor(private dialog: MatDialogRef<HowToUseComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ){}
  ngOnInit() {

    if(this.data) {
      this.show = false ;
    }


  }

  doNotShowItAgain() {
    this.cheked = !this.cheked ;
 let s = '' ;

  if (this.cheked) {
    s = 'false' ;
  } else {
    s = '' ;
  }
  localStorage.setItem('showit', s);
  }

}
