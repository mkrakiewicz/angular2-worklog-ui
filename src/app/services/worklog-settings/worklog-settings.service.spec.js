"use strict";
var testing_1 = require('@angular/core/testing');
var worklog_settings_service_1 = require('./worklog-settings.service');
describe('WorklogSettingsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [worklog_settings_service_1.WorklogSettingsService]
        });
    });
    it('should be created', testing_1.inject([worklog_settings_service_1.WorklogSettingsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=worklog-settings.service.spec.js.map