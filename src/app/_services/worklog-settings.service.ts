import {APP_CONFIG, IAppConfig} from './../config'
import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {BaseService} from "./base.service";

@Injectable()
export class WorklogSettingsService extends BaseService {
    constructor(@Inject(APP_CONFIG) config:IAppConfig,
                http:Http) {
        super('worklogs', config, http);
    }
}
