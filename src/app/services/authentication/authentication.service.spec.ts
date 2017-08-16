import {TestBed, inject, fakeAsync, tick} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {APP_CONFIG, AppConfig} from "../../config";
import {BaseRequestOptions, Response, ResponseOptions, Http, ConnectionBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ExpectedHttpData} from './expected.http.data';

describe('AuthenticationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: APP_CONFIG, useValue: AppConfig},
                AuthenticationService,
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

    it('should be created', inject([AuthenticationService], (service:AuthenticationService) => {
        expect(service).toBeTruthy();
    }));

    it('should return token and acl', fakeAsync(inject([AuthenticationService, MockBackend],
        (authenticationService:AuthenticationService, mockBackend:MockBackend) => {

            // expect(authenticationService.loggedIn()).toBeFalsy();

            let response = new ResponseOptions({body: ExpectedHttpData});

            mockBackend.connections.subscribe(connection => {
                expect(connection.request.url).toBe('http://fake.test.url/api/oauth/token');
                connection.mockRespond(new Response(response))
            });

            var result;
            authenticationService.login('user','password')
                .subscribe(data => {
                    result = data;
                });

            tick();
            expect(result.token).toEqual("some.access.token-it-is");
            // expect(authenticationService.loggedIn()).toBeTruthy();

        }))
    );
});
