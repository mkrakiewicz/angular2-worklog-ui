"use strict";
var testing_1 = require('@angular/core/testing');
var authentication_service_1 = require('./authentication.service');
var config_1 = require("../config");
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var authentication_service_mock_1 = require('./authentication.service.mock');
describe('AuthenticationService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                { provide: config_1.APP_CONFIG, useValue: config_1.AppConfigTest },
                authentication_service_1.AuthenticationService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
            ]
        });
    });
    it('should be created', testing_1.inject([authentication_service_1.AuthenticationService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should return token and acl', testing_1.fakeAsync(testing_1.inject([authentication_service_1.AuthenticationService, testing_2.MockBackend], function (authenticationService, mockBackend) {
        // expect(authenticationService.loggedIn()).toBeFalsy();
        var response = new http_1.ResponseOptions({ body: authentication_service_mock_1.MockLoginAuth });
        mockBackend.connections.subscribe(function (connection) {
            expect(connection.request.url).toBe('http://fake.test.url/api/oauth/token');
            connection.mockRespond(new http_1.Response(response));
        });
        var result;
        authenticationService.login('user', 'password')
            .subscribe(function (data) {
            result = data;
        });
        testing_1.tick();
        expect(result.token).toEqual("some.access.token-it-is");
        // expect(authenticationService.loggedIn()).toBeTruthy();
    })));
});
//# sourceMappingURL=authentication.service.spec.js.map