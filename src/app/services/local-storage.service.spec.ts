import {TestBed, inject} from '@angular/core/testing';

import {LocalStorageService} from './local-storage.service';

describe('LocalStorageService', () => {

    let storageService:LocalStorageService;
    beforeEach(function () {
        var store = {};

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return store[key];
        });
        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
            return store[key] = value + '';
        });
        spyOn(localStorage, 'clear').and.callFake(function () {
            store = {};
        });
        storageService = new LocalStorageService();
    });

    it('check persist', () => {
        storageService.save('someKey', 'value 1');
        expect(storageService.get('someKey')).toBe('value 1');
    });

    it('check object persist', () => {
        let obj = {
            something: {val: 5}
        };
        storageService.save('someKey 1', obj);
        expect(storageService.get('someKey 1').something.val).toEqual(5);
    });
});
