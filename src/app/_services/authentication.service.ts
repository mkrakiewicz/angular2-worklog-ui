import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http:Http) {
    }

    login(username:string, password:string) {
        var data =
        {username: username, password: password, grant_type: "password", client_id: 1, client_secret: "test"};
        var headers = new Headers({'Content-Type': 'application/json'});
        var optionses = new RequestOptions({headers: headers});
        debugger;
        return this.http.post(
            'http://laravel-worklog-calculator.public.dev/oauth/token',
            JSON.stringify(data),
            optionses
        )
            .map((response:Response) => {
                debugger;
                // login successful if there's a jwt token in the response
                let data = response.json();
                let token = data.access_token;
                let user = data.user;
                let acl = data.acl;

                let currentUser = {
                    token: token,
                    user: user,
                    acl: acl
                };

                if (user && token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                }


                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}