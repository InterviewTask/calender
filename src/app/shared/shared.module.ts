import { NgModule } from '@angular/core';
import { ConfirmComponent } from './components/confirm/confirm.component';

import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';

/* ================
/ COMPONENTS
/=================*/

const COMPONENTS = [
  ConfirmComponent
]

/* ================
/ IMPORTS
/=================*/
const MODULES = [
  CommonModule,
  MatTableModule,
  DragDropModule
]



@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports:[
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
