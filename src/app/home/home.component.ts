import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit , OnDestroy {
id = 1000 ;
users: Array<any> = new Array();
fromson ;
sub ; sub1: Subscription ;
  constructor(private userservice: UserService, private router: Router , private route: ActivatedRoute) {


  }

  ngOnInit() {



  }


  getfrommychild(event) {

  this.fromson = event.data;
  }

ngOnDestroy() {

}

do() {

}


}
