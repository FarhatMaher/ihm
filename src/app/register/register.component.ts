import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }


  register(username , password) {

    this.userservice.Addusers(username, password).subscribe(data => this.handler(data));
  }

  handler(data) {
    if (data ) {
      console.log(data);
    alert(data); }

  }
}
