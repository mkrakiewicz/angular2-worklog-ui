import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWorklogsComponent } from './list-of-worklogs.component';


import {APP_CONFIG, AppConfig} from './../../config'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BaseRequestOptions} from '@angular/http';
import {routing}        from './../../app.routing';
import {AlertComponent} from './../../directives';
import {AuthGuard} from './../../guards/index';
import {WorklogService} from "../../services";
import {ExpectedHttpData} from "../../services/api/worklog/expected.http.data";

xdescribe('ListOfWorklogsComponent', () => {
  let component: ListOfWorklogsComponent;
  let service: WorklogService;
  let spy: any;

  beforeEach(async(() => {
    service = new WorklogService(null,null);
    component = new ListOfWorklogsComponent(service);
    // fixture = TestBed.createComponent(ListOfWorklogsComponent);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render worklog elements', async(() => {
    spyOn(service, 'getAll').and.callFake(function(){return JSON.parse(ExpectedHttpData).data});
    // fixture.detectChanges();
    // const compiled = component.debugElement.nativeElement;
    // expect(compiled.querySelector('table').textContent).toContain('Programming in C#');
  }));

});
