"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'app';
        this.loggedIn = this.auth.loggedIn();
        this.acl = this.auth.acl();
        this.user = this.auth.user();
        auth.loggedIn$.subscribe(function (loggedIn) {
            _this.loggedIn = _this.auth.loggedIn();
            _this.acl = _this.auth.acl();
            _this.user = _this.auth.user();
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map