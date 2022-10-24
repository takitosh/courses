import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from "./components/button/button.component";

import { DurationPipe } from "./pipes/duration.pipe";
import { emailValidatorDirective } from "./directives/validator/validator.directive";
import {HighlightDirective} from "./directives/hilighter/hilighter.directive";
import {SearchComponent} from "./components/search/search.component";

const components: any[] = [ HeaderComponent, ButtonComponent, DurationPipe, emailValidatorDirective, HighlightDirective,
  SearchComponent ]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: components,
})
export class SharedModule { }
