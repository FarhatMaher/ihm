
import { Component, OnInit, AfterContentInit, AfterContentChecked} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Formationapp';
  nom = 'maher' ;
  prenom = ' farhat' ;
  age = '23';
color = 'red';
  birthday = new Date(1995, 5 , 30);
  format = 'MM/dd/yy' ;
  users: Array<any> = new Array();
  id ;
  sub: Subscription;

  constructor () {

      this.title = 'welcome to session 2'
;
/*
this.sub = this.http.authentification().subscribe(data => console.log(data) ,
                                      error => console.log(error)  ) ;

  this.http.getUsersPromise(3).then(data => console.log(data)).catch(err => console.log(err));
this.comp.ngOnInit();*/
  }

ngOnInit() {


}






}


