import { NgModule } from '@angular/core';

import {AddingDeletingCategoriesComponent} from "./components/adding-deleting-categories/adding-deleting-categories.component";
import {CreateEditcategoriesComponent} from "./components/create-editcategories/create-editcategories.component";
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



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
    RippleModule
  ],
  exports:[RouterModule]
})
export class TasksCategoriesModule { }
