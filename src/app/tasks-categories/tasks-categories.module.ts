import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddingDeletingCategoriesComponent} from "./adding-deleting-categories/adding-deleting-categories.component";
import {CreateEditcategoriesComponent} from "./create-editcategories/create-editcategories.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations:[
    CreateEditcategoriesComponent,
    AddingDeletingCategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RouterModule]
})
export class TasksCategoriesModule { }
