import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { DiceRoutingModule } from './dice-routing.module';
import { DicePageComponent } from './dice-page/dice-page.component';
import { DiceHistoryComponent } from './dice-history/dice-history.component';

@NgModule({
  declarations: [DicePageComponent, DiceHistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    DiceRoutingModule
  ]
})
export class DiceModule { }
