import {TestBed, inject} from '@angular/core/testing';
import {APP_CONFIG, AppConfig} from "../../../config";
import {WorklogSettingsService} from './worklog-settings.service';
import {BaseRequestOptions, Response, ResponseOptions, Http, ConnectionBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('WorklogSettingsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: APP_CONFIG, useValue: AppConfig},
                WorklogSettingsService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
                    return new Http(backend, defaultOptions)
                },
                    deps: [MockBackend, BaseRequestOptions]
                },
            ]
        });
    });

    it('should be created', inject([WorklogSettingsService], (service:WorklogSettingsService) => {
        expect(service).toBeTruthy();
    }));
});
