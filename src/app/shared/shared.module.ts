import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import {ButtonComponent} from "./components/button/button.component";

import {DurationPipe} from "./pipes/duration.pipe";

const components: any[] = [ HeaderComponent, ButtonComponent, DurationPipe ]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: components,
})
export class SharedModule { }
