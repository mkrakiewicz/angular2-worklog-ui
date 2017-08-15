"use strict";
var testing_1 = require('@angular/core/testing');
var worklog_service_1 = require('./worklog.service');
var config_1 = require("../config");
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var worklog_service_mock_1 = require('./worklog.service.mock');
describe('WorklogService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                { provide: config_1.APP_CONFIG, useValue: config_1.AppConfigTest },
                worklog_service_1.WorklogService,
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
    it('should be created', testing_1.inject([worklog_service_1.WorklogService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('should return worklogs', testing_1.fakeAsync(testing_1.inject([worklog_service_1.WorklogService, testing_2.MockBackend], function (worklogService, mockBackend) {
        var response = new http_1.ResponseOptions({ body: worklog_service_mock_1.WorklogsGetMock });
        mockBackend.connections.subscribe(function (connection) {
            expect(connection.request.url).toBe('http://fake.test.url/api/worklogs');
            connection.mockRespond(new http_1.Response(response));
        });
        var result;
        worklogService.getAll()
            .subscribe(function (data) {
            result = data;
        });
        testing_1.tick();
        expect(result.length).toEqual(13);
        expect(result).toEqual(JSON.parse(worklog_service_mock_1.WorklogsGetMock).data);
    })));
});
//# sourceMappingURL=worklog.service.spec.js.map