import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ToastModule } from 'primeng/toast';
//import {TableModule} from 'primeng/table';
//import {ChartModule, TreeTableModule,  DropdownModule, MultiSelectModule, CarouselModule, TooltipModule} from 'primeng/primeng';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
  } from '@angular/forms';
import { SharedModule } from '../shared.module';


  @NgModule({
    imports: [
      CommonModule,
      ToastModule,
      RegisterRoutingModule, FormsModule, ReactiveFormsModule,
      SharedModule,
    ],
    declarations: [RegisterComponent]
  })
  export class RegisterModule { }