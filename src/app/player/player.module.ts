import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material / Cdk
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerPageComponent } from './player-page/player-page.component';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    DragDropModule,

    AngularFirestoreModule,

    FontAwesomeModule,

    PlayerRoutingModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
