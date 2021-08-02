import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared.module';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { UserManagementComponent } from './user-management/user-management.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
//import { UseraccesscontrolComponentsComponent } from './useraccesscontrol-components/useraccesscontrol-components.component';
//import { useraccesscontrolComponent } from './useraccesscontrol/useraccesscontrol.component';
//import { homeComponent } from './home/home.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { FooterComponent } from './components/footer/footer.component';
//import { TrackComponent } from './track/track.component';
// import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    TooltipModule,
    InputSwitchModule,
    AngularMultiSelectModule,
    AutoCompleteModule
  ],
  declarations: [
    LayoutComponent,
    UserManagementComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent
  ]
})
export class LayoutModule { }