import {APP_CONFIG, IAppConfig} from './../config'
import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Model} from '../_models/index';

@Injectable()
export class BaseService {

    private apiPath:string;
    private config:IAppConfig;
    private http:Http;

    constructor(apiPath:string, @Inject(APP_CONFIG) config:IAppConfig, http:Http) {
        this.apiPath = apiPath;
        this.config = config;
        this.http = http;
    }

    getAll() {
        return this.http.get(this.getURL(null), this.jwt()).map((response:Response) => response.json().data);
    }

    getById(id:number) {
        return this.http.get(this.getURL(id), this.jwt()).map((response:Response) => response.json().data);
    }

    create(model:Model) {
        return this.http.post(this.getURL(null), model, this.jwt()).map((response:Response) => response.json().data);
    }

    update(model:Model) {
        return this.http.put(this.getURL(model.id), model, this.jwt()).map((response:Response) => response.json().data);
    }

    delete(id:number) {
        return this.http.delete(this.getURL(id), this.jwt()).map((response:Response) => response.json().data);
    }

    private jwt() {
        // create authorization header with jwt token
        let headers = new Headers({'Content-Type': 'application/json'});
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new RequestOptions({headers: headers});
    }

    private getURL(id:number) {
        var url = this.config.apiEndpoint + this.apiPath;
        if (!!id) {
            url += ('/' + id);
        }
        return url;
    }
}