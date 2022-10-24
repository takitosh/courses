import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import {CourseCardComponent} from "./components/course-card/course-card.component";
import {CoursesComponent} from "./components/courses/courses.component";

@NgModule({
  declarations: [
    CourseCardComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
