"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/map');
var app_config_1 = require("../config/app.config");
var AuthenticationService = (function () {
    function AuthenticationService(config, http) {
        this.config = config;
        this.http = http;
        this.loggedInSource = new Subject_1.Subject();
        this.loggedIn$ = this.loggedInSource.asObservable();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var data = { username: username, password: password, grant_type: "password", client_id: 1, client_secret: "test" };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var optionses = new http_1.RequestOptions({ headers: headers });
        debugger;
        return this.http.post(this.config.apiEndpoint + 'oauth/token', JSON.stringify(data), optionses)
            .map(function (response) {
            debugger;
            // login successful if there's a jwt token in the response
            var data = response.json();
            var token = data.access_token;
            var user = data.user;
            var acl = data.acl;
            var currentUser = {
                token: token,
                user: user,
                acl: acl
            };
            if (user && token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                _this.loggedInSource.next(true);
            }
            return currentUser;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedInSource.next(false);
    };
    AuthenticationService.prototype.acl = function () {
        var currentUser = this.getUserFromLocalStorage();
        if (currentUser) {
            return currentUser.acl;
        }
        return {};
    };
    AuthenticationService.prototype.getUserFromLocalStorage = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return JSON.parse(currentUser);
        }
        return null;
    };
    AuthenticationService.prototype.user = function () {
        var currentUser = this.getUserFromLocalStorage();
        if (currentUser) {
            return currentUser.user;
        }
        return {};
    };
    AuthenticationService.prototype.loggedIn = function () {
        var currentUser = this.getUserFromLocalStorage();
        if (currentUser) {
            return !!currentUser.token;
        }
        return false;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_config_1.APP_CONFIG))
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map