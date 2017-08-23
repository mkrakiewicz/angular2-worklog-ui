import {APP_CONFIG, AppConfig} from './config'
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BaseRequestOptions} from '@angular/http';
import {routing}        from './app.routing';
import {AlertComponent} from './directives';
import {AuthGuard} from './guards/index';
import * as AppServices from './services';
import * as AppComponents from './components';
import { BlaCompComponent } from './bla-comp/bla-comp.component';

@NgModule({
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
        AppComponents.UsersComponent,
        BlaCompComponent
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
    bootstrap: [AppComponents.AppComponent]
})

export class AppModule {
}