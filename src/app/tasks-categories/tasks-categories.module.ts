import { NgModule } from '@angular/core';

import {AddingDeletingCategoriesComponent} from "./components/adding-deleting-categories/adding-deleting-categories.component";
import {CreateEditcategoriesComponent} from "./components/create-editcategories/create-editcategories.component";
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {StyleClassModule} from "primeng/styleclass";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";



@NgModule({
  declarations:[
    CreateEditcategoriesComponent,
    AddingDeletingCategoriesComponent,

  ],
    imports: [
        FormsModule,
        NgForOf,
        CardModule,
        ButtonModule,
        RippleModule,
        ToolbarModule,
        StyleClassModule,
        TableModule,
        CalendarModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        NgIf,
        ConfirmDialogModule,
        ReactiveFormsModule,
    ],
  exports:[RouterModule]
})
export class TasksCategoriesModule { }
