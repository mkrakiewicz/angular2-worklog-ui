import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './guards';
import * as AppComponents from './components';

const appRoutes:Routes = [
    {path: '', component: AppComponents.DashboardComponent},
    {path: 'home', component: AppComponents.DashboardComponent, canActivate: [AuthGuard]},
    {path: 'list-of-worklogs', component: AppComponents.ListOfWorklogsComponent, canActivate: [AuthGuard]},
    {path: 'settings', component: AppComponents.WorklogSettingsComponent, canActivate: [AuthGuard]},
    {path: 'users', component: AppComponents.UsersComponent, canActivate: [AuthGuard]},

    {path: 'login', component: AppComponents.LoginComponent},
    {path: 'register', component: AppComponents.RegisterComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});