import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { SharedModule } from '@payever/shared';


@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CalenderRoutingModule
  ]
})
export class CalenderModule { }
