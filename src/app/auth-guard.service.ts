import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import {LocalStorageService} from 'ngx-webstorage';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private serv: UserService, private router: Router) { }

canActivate(path: ActivatedRouteSnapshot ,
  state: RouterStateSnapshot): boolean {

return this.serv.gettoken();

}

}
