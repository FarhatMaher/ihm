import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profil;
  constructor(private userService: UserService) {
    this.userService.getprofile().subscribe(data => this.profil = data );
   }

  ngOnInit() {

  }

}
