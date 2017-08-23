import {APP_CONFIG, IAppConfig} from '../../../config';
import {CrudService} from "../crud.service";
import {Injectable, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService extends CrudService {

    constructor(@Inject(APP_CONFIG) config:IAppConfig,
                http:HttpClient) {
        super('users', config, http);
    }
}