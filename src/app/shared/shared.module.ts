import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LoaderComponent} from './loader/loader.component';
import {SocialLineComponent} from './social-line/social-line.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoaderComponent, SocialLineComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, FooterComponent, LoaderComponent, SocialLineComponent]
})
export class SharedModule { }
