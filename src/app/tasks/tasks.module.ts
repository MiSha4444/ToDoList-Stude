import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditingCreatingTasksComponent} from "./editing-creating-tasks/editing-creating-tasks.component";
import {DisplayDeletingTasksComponent} from "./display-deleting-tasks/display-deleting-tasks.component";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    EditingCreatingTasksComponent,
    DisplayDeletingTasksComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[RouterModule]
})
export class TasksModule { }
