import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizationComponent} from "./authenfication/authorization/authorization.component";
import {RegistrationComponent} from "./authenfication/registration/registration.component";
import {DisplayDeletingTasksComponent} from "./tasks/display-deleting-tasks/display-deleting-tasks.component";
import {
  AddingDeletingCategoriesComponent
} from "./tasks-categories/adding-deleting-categories/adding-deleting-categories.component";

const routes:Routes =[
  {path: 'Authorization',component:AuthorizationComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'Tasks',component:DisplayDeletingTasksComponent},
  {path:'TasksCategories',component:AddingDeletingCategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
