import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { SharedModule } from '@payever/shared';
import { AppointmentsTableComponent } from './components/appointments-table/appointments-table.component';


@NgModule({
  declarations: [
    CalenderComponent,
    AppointmentsTableComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CalenderRoutingModule
  ]
})
export class CalenderModule { }
