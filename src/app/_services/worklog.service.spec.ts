import {TestBed, inject} from '@angular/core/testing';

import {WorklogService} from './worklog.service';
import {APP_CONFIG_TEST, AppConfigTest} from "../config/app.config.test";

describe('WorklogService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WorklogService,
                {provide: APP_CONFIG_TEST, useValue: AppConfigTest},
            ]
        });
    });

    it('should be created', inject([WorklogService], (service:WorklogService) => {
        expect(service).toBeTruthy();
    }));
});
