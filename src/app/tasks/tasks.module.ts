import {NgModule} from '@angular/core';

import {DisplayDeletingTasksComponent} from "./сomponents/display-deleting-tasks/display-deleting-tasks.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {NgForOf, NgIf} from "@angular/common";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [
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
    CalendarModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [MessageService, ConfirmationService],
})
export class TasksModule {
}
