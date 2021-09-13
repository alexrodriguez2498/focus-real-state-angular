import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import {RouterModule} from '@angular/router';


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
    ])
  ]
})
export class InmueblesModule { }
