import {APP_CONFIG, IAppConfig} from '../../config';
import {BaseService} from "../base.service";
import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class UserService extends BaseService {

    constructor(@Inject(APP_CONFIG) config:IAppConfig,
                http:Http) {
        super('users', config, http);
    }
}