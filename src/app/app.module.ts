import {APP_CONFIG, AppConfig} from './config'
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, WorklogService } from './_services/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { WorklogSettingsComponent } from './worklog-settings/worklog-settings.component';
import { ListOfWorklogsComponent } from './list-of-worklogs/list-of-worklogs.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    WorklogSettingsComponent,
    ListOfWorklogsComponent,
    UsersComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    WorklogService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }