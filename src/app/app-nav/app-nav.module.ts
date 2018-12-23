import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import {
  MatRippleModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppNavComponent } from './app-nav.component';
import { AppNavService } from './app-nav.service';

@NgModule({
  declarations: [
    AppNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatRippleModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  providers: [
    AppNavService
  ]
})
export class AppNavModule { }
