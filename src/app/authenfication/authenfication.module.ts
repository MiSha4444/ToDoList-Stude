import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {VerificationService} from "./verification.service";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
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
