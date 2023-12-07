import { NgModule } from '@angular/core';

import {EditingCreatingTasksComponent} from "./сomponents/editing-creating-tasks/editing-creating-tasks.component";
import {DisplayDeletingTasksComponent} from "./сomponents/display-deleting-tasks/display-deleting-tasks.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";




@NgModule({
  declarations: [
    EditingCreatingTasksComponent,
    DisplayDeletingTasksComponent,
  ],
    imports: [
        TableModule,
        NgForOf,
        ToolbarModule,
        DialogModule,
        RadioButtonModule,
        FormsModule,
        NgIf,
        RippleModule,
        ButtonModule,
        InputTextareaModule,
        ChipsModule,
        DataViewModule,
        DropdownModule,
        JsonPipe,
        CalendarModule
    ],
  exports:[RouterModule],
})
export class TasksModule { }
