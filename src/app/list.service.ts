import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {
url = 'http://localhost:3000/' ;
  constructor(private http: HttpClient) { }

  getTodo(): Observable<any> {

    return this.http.get<any>(this.url + 'todo');
  }
  getDone(): Observable<any> {

    return this.http.get<any>(this.url + 'done');
  }

  putTodo(todo): Observable<any> {
    const headers = new HttpHeaders({
        "ContentType" : "application/json"
    });

    return this.http.put<any>(this.url + 'todo/' + todo.id , todo , {headers: headers} );

  }

  postTodo(todo): Observable<any> {
    const headers = new HttpHeaders({
        "ContentType" : "application/json"
    });

    return this.http.post<any>(this.url + 'todo', todo, {headers: headers} );
}

getBacklog(): Observable<any> {

  return this.http.get<any>(this.url + 'backlog');
}

getProject(): Observable<any> {

  return this.http.get<any>(this.url + 'projects');
}

postProject(project): Observable<any> {
  const headers = new HttpHeaders({
      "ContentType" : "application/json"
  });

  return this.http.post<any>(this.url + 'projects', project, {headers: headers} );
}

postbacklog(log): Observable<any> {
  const headers = new HttpHeaders({
      "ContentType" : "application/json"
  });

  return this.http.post<any>(this.url + 'backlog', log, {headers: headers} );
}

putbacklog(log): Observable<any> {
  const headers = new HttpHeaders({
      "ContentType" : "application/json"
  });

  return this.http.put<any>(this.url + 'backlog/' + log.id, log, {headers: headers} );
}


deletebacklog(id): Observable<any> {
  const headers = new HttpHeaders({
      "ContentType" : "application/json"
  });

  return this.http.delete<any>(this.url + 'backlog/' + id, {headers: headers} );
}

}
