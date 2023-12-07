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
    ],
    providers: [MessageService, ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
