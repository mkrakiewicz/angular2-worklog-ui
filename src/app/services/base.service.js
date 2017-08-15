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
var config_1 = require('./../config');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var BaseService = (function () {
    function BaseService(apiPath, config, http) {
        this.apiPath = apiPath;
        this.config = config;
        this.http = http;
    }
    BaseService.prototype.getAll = function () {
        return this.http.get(this.getURL(null), this.jwt()).map(function (response) { return response.json().data; });
    };
    BaseService.prototype.getById = function (id) {
        return this.http.get(this.getURL(id), this.jwt()).map(function (response) { return response.json().data; });
    };
    BaseService.prototype.create = function (model) {
        return this.http.post(this.getURL(null), model, this.jwt()).map(function (response) { return response.json().data; });
    };
    BaseService.prototype.update = function (model) {
        return this.http.put(this.getURL(model.id), model, this.jwt()).map(function (response) { return response.json().data; });
    };
    BaseService.prototype.delete = function (id) {
        return this.http.delete(this.getURL(id), this.jwt()).map(function (response) { return response.json().data; });
    };
    BaseService.prototype.jwt = function () {
        // create authorization header with jwt token
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new http_1.RequestOptions({ headers: headers });
    };
    BaseService.prototype.getURL = function (id) {
        var url = this.config.apiEndpoint + this.apiPath;
        if (!!id) {
            url += ('/' + id);
        }
        return url;
    };
    BaseService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(config_1.APP_CONFIG))
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map