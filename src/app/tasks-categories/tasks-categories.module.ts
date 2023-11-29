import { NgModule } from '@angular/core';

import {AddingDeletingCategoriesComponent} from "./components/adding-deleting-categories/adding-deleting-categories.component";
import {CreateEditcategoriesComponent} from "./components/create-editcategories/create-editcategories.component";
import {RouterModule} from '@angular/router';



@NgModule({
  declarations:[
    CreateEditcategoriesComponent,
    AddingDeletingCategoriesComponent
  ],
  imports: [
  ],
  exports:[RouterModule]
})
export class TasksCategoriesModule { }
