import { TestBed, inject } from '@angular/core/testing';

import { WorklogSettingsService } from './worklog-settings.service';

xdescribe('WorklogSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorklogSettingsService]
    });
  });

  it('should be created', inject([WorklogSettingsService], (service: WorklogSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
