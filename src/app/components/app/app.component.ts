import {Component} from '@angular/core';
import {AuthenticationService} from './../../services';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor(private auth:AuthenticationService) {
        auth.loggedIn$.subscribe(
            loggedIn => {
                this.loggedIn = this.auth.loggedIn();
                this.acl = this.auth.acl();
                this.user = this.auth.user();
            });
    }

    loggedIn = this.auth.loggedIn();
    acl = this.auth.acl();
    user = this.auth.user();
}
