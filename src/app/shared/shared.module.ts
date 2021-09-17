import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LoaderComponent} from './loader/loader.component';
import {SocialLineComponent} from './social-line/social-line.component';
import {RouterModule} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoaderComponent, SocialLineComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [NavbarComponent, FooterComponent, LoaderComponent, SocialLineComponent]
})
export class SharedModule { }
