import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from "./authenfication/components/authorization/authorization.component";
import {RegistrationComponent} from "./authenfication/components/registration/registration.component";
import {
  DisplayDeletingTasksComponent
} from "./tasks/сomponents/display-deleting-tasks/display-deleting-tasks.component";
import {
  AddingDeletingCategoriesComponent
} from "./tasks-categories/components/adding-deleting-categories/adding-deleting-categories.component";
import {gurdsGuard} from "./gurds.guard";
import {ExitComponent} from "./authenfication/components/exit/exit.component";

const routes: Routes = [
  {path: 'Authorization', component: AuthorizationComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: 'Tasks', component: DisplayDeletingTasksComponent, canActivate: [gurdsGuard]},
  {path: 'TasksCategories', component: AddingDeletingCategoriesComponent, canActivate: [gurdsGuard]},
  {path: 'Exit', component: ExitComponent, canActivate: [gurdsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
