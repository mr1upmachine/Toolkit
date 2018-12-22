import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
