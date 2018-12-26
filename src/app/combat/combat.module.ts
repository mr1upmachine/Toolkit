import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombatRoutingModule } from './combat-routing.module';
import { CombatPageComponent } from './combat-page/combat-page.component';

@NgModule({
  declarations: [CombatPageComponent],
  imports: [
    CommonModule,
    CombatRoutingModule
  ]
})
export class CombatModule { }
