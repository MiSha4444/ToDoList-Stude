import { NgModule } from '@angular/core';

import {EditingCreatingTasksComponent} from "./сomponents/editing-creating-tasks/editing-creating-tasks.component";
import {DisplayDeletingTasksComponent} from "./сomponents/display-deleting-tasks/display-deleting-tasks.component";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {NgForOf} from "@angular/common";




@NgModule({
  declarations: [
    EditingCreatingTasksComponent,
    DisplayDeletingTasksComponent,
  ],
    imports: [
        TableModule,
        NgForOf
    ],
  exports:[RouterModule]
})
export class TasksModule { }
