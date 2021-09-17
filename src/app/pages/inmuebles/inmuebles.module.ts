import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    InmueblesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InmueblesComponent
      }
    ]),
    MatIconModule
  ]
})
export class InmueblesModule { }
