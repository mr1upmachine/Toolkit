import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
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
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    DiceRoutingModule
  ]
})
export class DiceModule { }
