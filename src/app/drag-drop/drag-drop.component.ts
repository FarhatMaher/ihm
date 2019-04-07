import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material';
import { HowToUseComponent } from '../how-to-use/how-to-use.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit{
  todo: any /* = [
    {'name':'Get to work'},
    {'name':'Pick up groceries'},
    {'name':'Go home'},
    {'name':'Fall asleep'}
  ];*/

  done: any /*= [
    {'name': 'Get up'},
    {'name': 'Brush teeth'},
    {'name': 'Take a shower'},
    {'name': 'Check e-mail'},
    {'name': 'Walk dog' }
  ];*/
  data ;
  inprogress = [   {'name': 'Get up'},
  {'name': 'Brush teeth'},
  {'name': 'Take a shower'},
  {'name': 'Check e-mail'},
  {'name': 'Walk dog' }];
  constructor(private dialog: MatDialog , private listservice: ListService) {

  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  ngOnInit(): void {

    this.listservice.getTodo().subscribe(todo => this.todo = todo) ;
    this.listservice.getTodo().subscribe(done => this.done = done) ;

    if(localStorage.getItem('showit') !== 'false')
  { this.dialog.open(HowToUseComponent , {width: '800px' , height: '600px'});}
  }


  do() {

    const dialogRef = this.dialog.open(AddTodoComponent, {
        width: '300px',
        height: '300px',
        data: {data: this.data}
      });

      dialogRef.afterClosed().subscribe(result => {

let  todomodif ;

        // this.todo.push( {'name': result , 'color': '#a52a2a'} );
if (result.length > 0) {
        this.listservice.postTodo({'name': result , 'color': '#a52a2a'}).subscribe(
          todo => {this.todo.push(todo) ; todomodif = {'name': result , id: todo.id} ; }
        );

       setTimeout(() => {
             this.listservice.putTodo(todomodif).subscribe(
          todo => this.todo[this.todo.length - 1 ] = todomodif
        );

          }, 2000);

        }
        });



}
}
