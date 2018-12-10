import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();
  constructor(private http: HttpClient) { }
 private loggedin = false ;
 setlogin() {
   this.loggedin = true;
 }
 getloggedin() {
  return this.loggedin;
 }
  getuser() {

console.log('hello');

  }

  getUsersPromise(n: number) {
    const promise = new Promise((resolve, reject) => {
  if (n > 0) {
     resolve ({id: 'maher'});
  } else {
  reject({msg: 'error'});
  }
    });
    return promise;
  }


  getprofile(): Observable<any> {
    const headers = new HttpHeaders(
      {
      'Content-Type': 'application/json',
    } );

return this.http.get('https://reqres.in/api/users/2' ,

    {headers: headers });
  }

  getAll_users(): Observable<any> {
    const headers = new HttpHeaders(
      {
      'Content-Type': 'application/json',
    } );

return this.http.get('https://reqres.in/api/users?page=2' ,

    {headers: headers });
  }

  authentification(email , password) {
    const headers = new HttpHeaders(
      {
      'Content-Type': 'application/json',
    } );
    const body = JSON.stringify({
      email: email,
      password : password

    });

return this.http.post('https://reqres.in/api/login' ,

   body, {headers: headers });

  }

  adddata(token) {
    localStorage.setItem('token', token);
  }

  gettoken() {
   const t = localStorage.getItem('token');
   return (t != null);
  }
  addtoobs() {
    this.notify.next('new object ');
    }


    Addusers(username, password): Observable<any> {
      const body = JSON.stringify({
        username: username ,
      password: password

      });
      const headers = new HttpHeaders(
        {
        'Content-Type': 'application/json',
      } );

  return this.http.post('https://reqres.in/api/users' ,

     body,   {headers: headers });
    }




}
