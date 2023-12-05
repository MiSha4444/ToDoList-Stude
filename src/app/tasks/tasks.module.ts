import { NgModule } from '@angular/core';

import {EditingCreatingTasksComponent} from "./сomponents/editing-creating-tasks/editing-creating-tasks.component";
import {DisplayDeletingTasksComponent} from "./сomponents/display-deleting-tasks/display-deleting-tasks.component";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {NgForOf} from "@angular/common";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";




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
    RadioButtonModule
  ],
  exports:[RouterModule]
})
export class TasksModule { }
