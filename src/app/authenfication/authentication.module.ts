import {NgModule} from '@angular/core';

import {RegistrationComponent} from "./components/registration/registration.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {ExitComponent} from "./components/exit/exit.component";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {NgIf} from "@angular/common";


@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
    ExitComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    ButtonModule,
    ConfirmDialogModule,
    NgIf
  ],
  exports: [RouterModule],
  providers: [ConfirmationService, MessageService]

})
export class AuthenticationModule {
}
