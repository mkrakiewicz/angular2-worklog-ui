import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
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

describe('AppComponent', () => {
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
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Input Of Worklogs');
    }));
});
