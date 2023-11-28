import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TasksCategoriesModule} from "./tasks-categories/tasks-categories.module";
import {TasksModule} from "./tasks/tasks.module";
import {AuthenficationModule} from "./authenfication/authenfication.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksCategoriesModule,
    TasksModule,
    AuthenficationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
