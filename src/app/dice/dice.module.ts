import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { DiceRoutingModule } from './dice-routing.module';
import { DicePageComponent } from './dice-page/dice-page.component';

@NgModule({
  declarations: [DicePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DiceRoutingModule
  ]
})
export class DiceModule { }
