"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./guards/index');
var AppComponents = require('./components/index');
var appRoutes = [
    { path: '', component: AppComponents.DashboardComponent },
    { path: 'home', component: AppComponents.DashboardComponent, canActivate: [index_1.AuthGuard] },
    { path: 'list-of-worklogs', component: AppComponents.ListOfWorklogsComponent, canActivate: [index_1.AuthGuard] },
    { path: 'settings', component: AppComponents.WorklogSettingsComponent, canActivate: [index_1.AuthGuard] },
    { path: 'users', component: AppComponents.UsersComponent, canActivate: [index_1.AuthGuard] },
    { path: 'login', component: AppComponents.LoginComponent },
    { path: 'register', component: AppComponents.RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map