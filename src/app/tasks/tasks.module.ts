import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditingCreatingTasksComponent} from "./editing-creating-tasks/editing-creating-tasks.component";
import {DisplayDeletingTasksComponent} from "./display-deleting-tasks/display-deleting-tasks.component";




@NgModule({
  declarations: [
    EditingCreatingTasksComponent,
    DisplayDeletingTasksComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
