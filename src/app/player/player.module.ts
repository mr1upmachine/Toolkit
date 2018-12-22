import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

// Cdk
import { DragDropModule } from '@angular/cdk/drag-drop';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
    DragDropModule,
    AngularFirestoreModule,
    PlayerRoutingModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
