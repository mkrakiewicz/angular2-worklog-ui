import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    save(key:string, value:any) {
        localStorage.setItem(key, value);
    }

    get(key:string):any {
        return localStorage.getItem(key);
    }
}
