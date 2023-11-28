import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthorizationComponent} from "./authorization/authorization.component";



@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenficationModule { }
