import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWorklogsComponent } from './list-of-worklogs.component';

describe('ListOfWorklogsComponent', () => {
  let component: ListOfWorklogsComponent;
  let fixture: ComponentFixture<ListOfWorklogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfWorklogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfWorklogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
