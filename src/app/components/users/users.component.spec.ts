import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';


import {APP_CONFIG, AppConfig} from './../../config'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BaseRequestOptions} from '@angular/http';
import {routing}        from './../../app.routing';
import {AlertComponent} from './../../directives';
import {AuthGuard} from './../../guards/index';
import * as AppServices from './../../services';
import * as AppComponents from './../../components';


describe('UsersComponent', () => {
    let component:UsersComponent;
    let fixture:ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                routing
            ],
            declarations: [
                AppComponents.AppComponent,
                AlertComponent,
                AppComponents.DashboardComponent,
                AppComponents.LoginComponent,
                AppComponents.RegisterComponent,
                AppComponents.WorklogSettingsComponent,
                AppComponents.ListOfWorklogsComponent,
                AppComponents.UsersComponent
            ],
            providers: [
                {provide: APP_CONFIG, useValue: AppConfig},
                AuthGuard,
                AppServices.AlertService,
                AppServices.AuthenticationService,
                AppServices.UserService,
                AppServices.WorklogService,
                // providers used to create fake backend
                // fakeBackendProvider,
                // MockBackend,
                BaseRequestOptions
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
