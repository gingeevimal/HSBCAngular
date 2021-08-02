import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from '../app/guard/authguard.service';
import { AuthenticationGuard } from '../app/guard/authentication.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthenticationGuard] },
{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, 
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService, AuthenticationGuard],
})
export class AppRoutingModule { }
