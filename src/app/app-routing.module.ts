import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from "./authenfication/components/authorization/authorization.component";
import {RegistrationComponent} from "./authenfication/components/registration/registration.component";
import {TasksComponent} from "./tasks/сomponents/tasks/tasks.component";
import {CategoriesComponent} from "./tasks-categories/components/categories/categories.component";
import {ExitComponent} from "./authenfication/components/exit/exit.component";
import {AUTH_GUARD, NO_AUTH_GUARD} from "./shared/const/const";

const routes: Routes = [
  {path: 'Authorization', component: AuthorizationComponent, canActivate: [AUTH_GUARD]},
  {path: 'Registration', component: RegistrationComponent, canActivate: [AUTH_GUARD]},
  {path: 'Tasks', component: TasksComponent, canActivate: [NO_AUTH_GUARD]},
  {path: 'TasksCategories', component: CategoriesComponent, canActivate: [NO_AUTH_GUARD]},
  {path: 'Exit', component: ExitComponent, canActivate: [NO_AUTH_GUARD]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
