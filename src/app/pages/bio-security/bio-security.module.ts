import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioSecurityComponent } from './bio-security/bio-security.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    BioSecurityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BioSecurityComponent
      }
    ])
  ]
})
export class BioSecurityModule { }
