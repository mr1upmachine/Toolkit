import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerPageComponent } from './player-page/player-page.component';

@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
