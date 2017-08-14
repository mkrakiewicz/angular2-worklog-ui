import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject}    from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import {APP_CONFIG} from "../config/app.config";
import {IAppConfig} from "../config/iapp-config";

@Injectable()
export class AuthenticationService {

    private loggedInSource = new Subject<boolean>();

    loggedIn$ = this.loggedInSource.asObservable();

    constructor(@Inject(APP_CONFIG) private config:IAppConfig, private http:Http) {
    }

    login(username:string, password:string) {
        var data =
        {username: username, password: password, grant_type: "password", client_id: 1, client_secret: "test"};
        var headers = new Headers({'Content-Type': 'application/json'});
        var optionses = new RequestOptions({headers: headers});
        debugger;
        return this.http.post(
            this.config.apiEndpoint + 'oauth/token',
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
                    this.loggedInSource.next(true);
                }

                return currentUser;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedInSource.next(false);
    }


    acl() {
        var currentUser = this.getUserFromLocalStorage();
        if (currentUser) {
            return currentUser.acl;
        }
        return {};
    }

    private getUserFromLocalStorage() {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return JSON.parse(currentUser);
        }
        return null;
    }


    user() {
        var currentUser = this.getUserFromLocalStorage();
        if (currentUser) {
            return currentUser.user;
        }
        return {};
    }


    loggedIn() {
        var currentUser = this.getUserFromLocalStorage();
        if (currentUser) {
            return !!currentUser.token;
        }
        return false;
    }


}