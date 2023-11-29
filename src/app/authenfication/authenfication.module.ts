import { NgModule } from '@angular/core';

import {RegistrationComponent} from "./components/registration/registration.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
  ],
  imports: [
    FormsModule
  ],
  exports:[RouterModule]

})
export class AuthenficationModule { }
