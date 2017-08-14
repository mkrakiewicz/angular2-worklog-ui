import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklogSettingsComponent } from './worklog-settings.component';

xdescribe('WorklogSettingsComponent', () => {
  let component: WorklogSettingsComponent;
  let fixture: ComponentFixture<WorklogSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklogSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklogSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
