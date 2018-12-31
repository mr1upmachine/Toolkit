import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DiceRoutingModule } from './dice-routing.module';
import { DicePageComponent } from './dice-page/dice-page.component';
import { DiceHistoryComponent } from './dice-history/dice-history.component';
import { DiceKeypadComponent } from './dice-page/dice-keypad/dice-keypad.component';

@NgModule({
  declarations: [
    DicePageComponent,
    DiceHistoryComponent,
    DiceKeypadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    DiceRoutingModule
  ]
})
export class DiceModule { }
