import { NgModule } from '@angular/core';

import {EditingCreatingTasksComponent} from "./сomponents/editing-creating-tasks/editing-creating-tasks.component";
import {DisplayDeletingTasksComponent} from "./сomponents/display-deleting-tasks/display-deleting-tasks.component";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    EditingCreatingTasksComponent,
    DisplayDeletingTasksComponent,
  ],
  imports: [
  ],
  exports:[RouterModule]
})
export class TasksModule { }
