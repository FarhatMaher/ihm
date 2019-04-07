import { DialogData } from './../add-todo/add-todo.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-addtobacklog',
  templateUrl: './addtobacklog.component.html',
  styleUrls: ['./addtobacklog.component.css']
})
export class AddtobacklogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
