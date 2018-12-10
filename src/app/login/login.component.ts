import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {


   }

  ngOnInit() {
  }


  auth(email , password) {

    this.userService.authentification(email , password).subscribe(data => this.handler(data));

  }
handler(data) {

if (data.token) {
  this.userService.adddata(data.token);
  this.router.navigate(['/dashboard']);

}
}

}
