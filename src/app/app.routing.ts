import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { WorklogSettingsComponent } from './worklog-settings/worklog-settings.component';
import { ListOfWorklogsComponent } from './list-of-worklogs/list-of-worklogs.component';
import { UsersComponent } from './users/users.component';
const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'list-of-worklogs', component: ListOfWorklogsComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: WorklogSettingsComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]; 

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });