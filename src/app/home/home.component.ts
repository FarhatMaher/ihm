import { MatDialog, MatSnackBar } from '@angular/material';
import { HowToUseComponent } from './../how-to-use/how-to-use.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver , private router: Router ,
    private dialog: MatDialog ,public snackBar: MatSnackBar ) {

      this.openSnackBar('Welcome ' + localStorage.getItem('username'));
    }

  logout() {

    this.router.navigate(['/login']);
    localStorage.removeItem('id');

  }

  help() {
    this.dialog.open(HowToUseComponent , {width: '800px' , height: '600px',
    data: {data: 'home'}});
  }


  openSnackBar(msg) {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: 2000,
      data : {message : msg}
    });
  }
}
