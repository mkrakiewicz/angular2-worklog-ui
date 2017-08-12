import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        //noinspection TypeScriptValidateTypes
        return this.http.get('http://laravel-worklog-calculator.public.dev/api/users', this.jwt()).map((response: Response) => response.json().data);
    }

    getById(id: number) {
        return this.http.get('http://laravel-worklog-calculator.public.dev/api/users/' + id, this.jwt()).map((response: Response) => response.json().data);
    }

    create(user: User) {
        return this.http.post('http://laravel-worklog-calculator.public.dev/api/users', user, this.jwt()).map((response: Response) => response.json().data);
    }

    update(user: User) {
        return this.http.put('http://laravel-worklog-calculator.public.dev/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json().data);
    }

    delete(id: number) {
        return this.http.delete('http://laravel-worklog-calculator.public.dev/api/users/' + id, this.jwt()).map((response: Response) => response.json().data);
    }

    // private helper methods

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