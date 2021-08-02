import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//import { AuthGuard } from '../shared/guard/auth.guard';
const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'ClientAdministration'},
            { path: 'dashboard', component:  DashboardComponent },
            { path: 'UserManagement', component:  UserManagementComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule {

}