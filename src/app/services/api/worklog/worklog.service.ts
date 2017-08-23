import {APP_CONFIG, IAppConfig} from '../../../config';
import {CrudService} from "../crud.service";
import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class WorklogService extends CrudService {
    constructor(@Inject(APP_CONFIG) config:IAppConfig,
                http:Http) {
        super('worklogs', config, http);
    }
}
