import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    FormsModule
  ],
  exports:[RouterModule]

})
export class AuthenficationModule { }
