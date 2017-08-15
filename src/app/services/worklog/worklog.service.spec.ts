import {TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import {WorklogService} from './worklog.service';
import {APP_CONFIG, AppConfigTest} from "../config";
import {BaseRequestOptions, Response, ResponseOptions, Http, ConnectionBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {WorklogsGetMock} from './worklog.service.mock';

describe('WorklogService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: APP_CONFIG, useValue: AppConfigTest},
                WorklogService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http, useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => {
                    return new Http(backend, defaultOptions)
                }, deps: [MockBackend, BaseRequestOptions]
                },
            ]
        });
    });

    it('should be created', inject([WorklogService], (service:WorklogService) => {
        expect(service).toBeTruthy();
    }));

    it('should return worklogs', fakeAsync(inject([WorklogService, MockBackend],
        (worklogService:WorklogService, mockBackend:MockBackend) => {

            let response = new ResponseOptions({body: WorklogsGetMock});

            mockBackend.connections.subscribe(connection => {
                expect(connection.request.url).toBe('http://fake.test.url/api/worklogs');
                connection.mockRespond(new Response(response))
            });

            var result;
            worklogService.getAll()
                .subscribe(data => {
                    result = data;
                });

            tick();
            expect(result.length).toEqual(13);
            expect(result).toEqual(JSON.parse(WorklogsGetMock).data);
        }))
    );
});
