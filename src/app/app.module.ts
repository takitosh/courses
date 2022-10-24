import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesModule} from "./modules/courses/courses.module";
import {SharedModule} from "./shared/shared.module";
import {RegistrationModule} from "./modules/registration/registration.module";
import {LoginModule} from "./modules/login/login.module";
import {InfoModule} from "./modules/info/info/info.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoursesModule,
        SharedModule,
        RegistrationModule,
        LoginModule,
        InfoModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
