import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
users;
  constructor(private userservive: UserService) {

    this.userservive.getAll_users().subscribe(
      data => this.handler(data.data)
    );
   }

 handler(data) {

    this.users = data ;
    console.log(data);
   }

  ngOnInit() {
  }

}
