"use strict";
var testing_1 = require('@angular/core/testing');
var worklog_settings_component_1 = require('./worklog-settings.component');
describe('WorklogSettingsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [worklog_settings_component_1.WorklogSettingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(worklog_settings_component_1.WorklogSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=worklog-settings.component.spec.js.map