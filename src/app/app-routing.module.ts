import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from "./authenfication/components/authorization/authorization.component";
import {RegistrationComponent} from "./authenfication/components/registration/registration.component";
import {
  TasksComponent
} from "./tasks/сomponents/./tasks/tasks.component";
import {
  CategoriesComponent
} from "./tasks-categories/components/categories/categories.component";
import {GuardAuth, gurdsGuard} from "./gurds.guard";
import {ExitComponent} from "./authenfication/components/exit/exit.component";

const routes: Routes = [
  {path: 'Authorization', component: AuthorizationComponent, canActivate: [GuardAuth]},
  {path: 'Registration', component: RegistrationComponent, canActivate: [GuardAuth]},
  {path: 'Tasks', component: TasksComponent, canActivate: [gurdsGuard]},
  {path: 'TasksCategories', component: CategoriesComponent, canActivate: [gurdsGuard]},
  {path: 'Exit', component: ExitComponent, canActivate: [gurdsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
