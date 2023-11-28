import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddingDeletingCategoriesComponent} from "./adding-deleting-categories/adding-deleting-categories.component";
import {CreateEditcategoriesComponent} from "./create-editcategories/create-editcategories.component";



@NgModule({
  declarations:[
    CreateEditcategoriesComponent,
    AddingDeletingCategoriesComponent
  ],
  imports: [

  ]
})
export class TasksCategoriesModule { }
