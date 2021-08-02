import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { ControlMessages } from "../helper/controls";
import { SharedModule } from '../shared.module';
import { from } from 'rxjs';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ToastModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    
  ]
})
export class LoginModule { }
