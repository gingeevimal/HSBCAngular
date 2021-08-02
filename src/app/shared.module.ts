import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ControlMessages } from "./helper/controls";
import { TableModule } from 'primeng/table';

import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FileUploadModule } from 'primeng/fileupload';
import { ListboxModule } from 'primeng/listbox';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
//import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeModule } from 'primeng/tree';
import {MatTabsModule} from '@angular/material/tabs';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


//import { DatauploadSummaryComponent } from './component/ApplicationModule/dataupload-summary/dataupload-summary.component';





@NgModule({
  declarations: [ControlMessages],
  imports: [CommonModule, FormsModule,],
  exports: [ControlMessages, TableModule, MultiSelectModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    BreadcrumbModule,
    OverlayPanelModule,
    FileUploadModule,
    TabViewModule,
    ScrollPanelModule,
    CalendarModule,
    ListboxModule, AccordionModule, CheckboxModule, PickListModule,
    RadioButtonModule,
    DragDropModule,
    TreeModule,
    MatTabsModule,
    Ng4LoadingSpinnerModule


  ]
})
export class SharedModule { }
