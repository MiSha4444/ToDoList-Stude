import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksCategoriesModule} from "./tasks-categories/tasks-categories.module";
import {TasksModule} from "./tasks/tasks.module";
import {AuthenficationModule} from "./authenfication/authenfication.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MenubarModule} from "primeng/menubar";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    TasksCategoriesModule,
    TasksModule,
    AuthenficationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MenubarModule,
    RippleModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
