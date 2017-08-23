import {APP_CONFIG, IAppConfig} from './../../config'
import {Injectable, Inject} from '@angular/core';
import { Headers, RequestOptions, Response} from '@angular/http';
import {Model} from '../../models';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CrudService {

    private apiPath:string;
    private config:IAppConfig;
    private http:HttpClient;

    constructor(apiPath:string, @Inject(APP_CONFIG) config:IAppConfig, http:HttpClient) {
        this.apiPath = apiPath;
        this.config = config;
        this.http = http;
    }

    getAll() {
        return this.http.get(this.getURL(null), this.jwt());
    }

    getById(id:number) {
        return this.http.get(this.getURL(id), this.jwt());
    }

    create(model:Model) {
        return this.http.post(this.getURL(null), model, this.jwt());
    }

    update(model:Model) {
        return this.http.put(this.getURL(model.id), model, this.jwt());
    }

    delete(id:number) {
        return this.http.delete(this.getURL(id), this.jwt());
    }

    getApiPath():string {
        return this.apiPath;
    }

    private jwt() {
        // create authorization header with jwt token
        // let headers = new HttpHeaders({'Content-Type': 'application/json'});
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if (currentUser && currentUser.token) {
        //     headers.append('Authorization', 'Bearer ' + currentUser.token);
        // }
        return null;
    }

    private getURL(id:number) {
        var url = this.config.apiEndpoint + this.apiPath;
        if (!!id) {
            url += ('/' + id);
        }
        return url;
    }
}