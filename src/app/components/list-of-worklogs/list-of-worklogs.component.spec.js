"use strict";
var testing_1 = require('@angular/core/testing');
var list_of_worklogs_component_1 = require('./list-of-worklogs.component');
describe('ListOfWorklogsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_of_worklogs_component_1.ListOfWorklogsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(list_of_worklogs_component_1.ListOfWorklogsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=list-of-worklogs.component.spec.js.map