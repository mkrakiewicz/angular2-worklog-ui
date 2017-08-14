import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class WorklogService {


  constructor(private http: Http) { }

  getAll() {
    //noinspection TypeScriptValidateTypes
    return this.http.get('http://laravel-worklog-calculator.public.dev/api/worklogs', this.jwt()).map((response: Response) => response.json().data);
  }
  
  private jwt() {
    // create authorization header with jwt token
    let headers = new Headers({'Content-Type': 'application/json'});
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      headers.append('Authorization','Bearer ' + currentUser.token);
    }
    return new RequestOptions({ headers: headers });
  }
}
